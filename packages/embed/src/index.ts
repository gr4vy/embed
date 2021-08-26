import { createConfig } from './create-config'
import { createFormController } from './form'
import { createFrameController } from './frame'
import { createOverlayController } from './overlay'
import { createPopupController } from './popup'
import { createSkeletonController } from './skeleton'
import { createSubjectManager } from './subjects'
import { SetupConfig, Config, Message } from './types'
import {
  mutableRef,
  pick,
  log,
  createMessageHandler,
  createDispatch,
  removeChildren,
  filterByType,
} from './utils'
import { validate } from './validation'

export const optionKeys = [
  'amount',
  'currency',
  'intent',
  'apiHost',
  'token',
  'showButton',
  'debug',
  'externalIdentifier',
  'preferResponse',
  'buyerId',
  'buyerExternalIdentifier',
  'environment',
  'store',
  'country',
  'theme',
  'locale',
  'display',
  'apiUrl',
]

// Map of cleanup callbacks
const cleanup = new Map<string, () => void>()

// Stores of count of unique embed instances
let embedId = 0

/**
 * Setup function for the Embed integration.
 *
 * Requires a valid querySelector query representing an HTML element
 * to append the form to, and a list of valid options for the form.
 */
export function setup(setupConfig: SetupConfig): void {
  // exit early if the config is not valid
  if (!validate(setupConfig)) {
    return
  }

  const config = createConfig(setupConfig)

  const subjectManager = createSubjectManager()

  const existingEmbedId = config.element.dataset.embedId

  // Cleanup existing element
  removeChildren(config.element)

  // Cleanup existing events
  if (cleanup.has(existingEmbedId)) {
    const cleanupFn = cleanup.get(existingEmbedId)
    cleanupFn()
  }

  // Attach a unique ID
  embedId = embedId + 1
  config.element.dataset.embedId = embedId.toString()

  // Loader
  const loader = document.createElement('div')
  createSkeletonController(loader, subjectManager)

  // Overlay
  const overlay = document.createElement('div')
  createOverlayController(overlay, subjectManager)

  // Form
  createFormController(
    config.form as HTMLFormElement,
    config.onComplete,
    subjectManager
  )

  createPopupController(
    mutableRef<{ popup: Window; stopCallback: () => void }>(),
    subjectManager
  )

  // Iframe - Load Gr4vy SPA/Attach to page
  const frame = document.createElement('iframe')
  createFrameController(frame, config.iframeSrc, subjectManager)

  // Attach elements to the DOM
  config.element.append(overlay, loader, frame)

  const messageEvents: Partial<
    Record<Message['type'], (data: Message['data']) => void>
  > = {
    modeUpdated: subjectManager.mode$.next,
    approvalUrl: subjectManager.approvalUrl$.next,
    resize: (data) => subjectManager.frameHeight$.next(data?.frame?.height),
    optionsLoaded: subjectManager.optionsLoaded$.next,
    transactionCreated: subjectManager.transactionCreated$.next,
    transactionFailed: subjectManager.transactionFailed$.next,
    frameReady: () =>
      dispatch({
        type: 'updateOptions',
        data: pick<Config>(config, optionKeys),
      }),
  }

  const dispatch = createDispatch(
    config.iframeUrl,
    config.channel,
    frame.contentWindow,
    (message) => log(`Page emits`, message, config.debug)
  )

  const messageHandler = createMessageHandler<Message>(
    config.iframeUrl,
    config.channel,
    (message) => {
      log(`Page received`, message, config.debug)
      if (
        ['formUpdate', 'transactionCreated', 'apiError'].includes(message.type)
      ) {
        config.onEvent?.(message.type, message.data)
      }
      if (messageEvents[message.type]) {
        messageEvents[message.type](message.data)
      }
    }
  )

  const apiMessageHandler = createMessageHandler(
    config.apiUrl,
    config.channel,
    (message) => {
      frame.contentWindow.postMessage(message, config.iframeUrl)
    }
  )

  const approvalMessageHandler = createMessageHandler(
    config.iframeUrl,
    config.channel,
    filterByType(['approvalErrored', 'transactionUpdated'], (message) =>
      frame.contentWindow.postMessage(message, config.iframeUrl)
    )
  )

  subjectManager.formSubmit$.subscribe(() => dispatch({ type: 'submitForm' }))
  subjectManager.approvalCancelled$.subscribe(() =>
    dispatch({ type: 'approvalCancelled' })
  )

  window.addEventListener('message', messageHandler)
  window.addEventListener('message', apiMessageHandler)
  window.addEventListener('message', approvalMessageHandler)

  // Cleanup
  cleanup.set(embedId.toString(), () => {
    window.removeEventListener('message', messageHandler)
    window.removeEventListener('message', apiMessageHandler)
    window.removeEventListener('message', approvalMessageHandler)
  })
}
