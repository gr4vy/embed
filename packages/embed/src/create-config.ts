import { SetupConfig, Config } from './types'
import { hostToUrl, appendUrlParams } from './utils'
import { generateChannelId } from './utils/generate-channel-id'

export const createConfig = (setupConfig: SetupConfig) => {
  const { gr4vyId, ...rest } = setupConfig

  const channel = generateChannelId()
  const iframeHost = gr4vyId
    ? `embed.${gr4vyId}.gr4vy.app`
    : setupConfig.iframeHost
  const apiHost = gr4vyId ? `api.${gr4vyId}.gr4vy.app` : setupConfig.apiHost
  const iframeUrl = hostToUrl(iframeHost)

  const form = !(setupConfig.form instanceof Element)
    ? document.querySelector(setupConfig.form)
    : setupConfig.form

  const element: unknown = !(setupConfig.element instanceof Element)
    ? document.querySelector(setupConfig.element)
    : setupConfig.element

  return {
    store: 'ask',
    display: 'all',
    apiHost,
    apiUrl: hostToUrl(apiHost),
    iframeHost,
    iframeUrl,
    iframeSrc: appendUrlParams(iframeUrl, {
      parentUrl: `${document.location.protocol}//${document.location.host}`,
      font: setupConfig.theme?.fonts?.body
        ? encodeURIComponent(setupConfig.theme.fonts.body)
        : undefined,
      channel,
    }),
    channel,
    ...rest,
    element,
    form,
  } as Config
}
