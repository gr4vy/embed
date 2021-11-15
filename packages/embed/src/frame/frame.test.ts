import { createSubjectManager, SubjectManager } from '../subjects'
import { createFrameController } from './frame'

describe('createFrameController', () => {
  let subject: SubjectManager

  beforeEach(() => {
    subject = createSubjectManager()
  })

  test('should initialize a new iframe', () => {
    const iframeUrl = 'http://localhost:8000'
    const frameElement = document.createElement('iframe')
    createFrameController(frameElement, iframeUrl, subject)

    expect(frameElement.getAttribute('src')).toEqual('http://localhost:8000')
    expect(frameElement.getAttribute('title')).toEqual(
      'Secure payment frame - Gr4vy'
    )
    expect(frameElement.getAttribute('style')).toEqual(
      'visibility: hidden; display: none; width: 100%; height: 0px; border: 0px; overflow: hidden;'
    )
    expect(frameElement.getAttribute('frameBorder')).toEqual('0')
    expect(frameElement.getAttribute('scrolling')).toEqual('no')
  })

  test('should change frame height when visible', () => {
    jest.useFakeTimers()
    const iframeUrl = 'http://localhost:8000'
    const frameElement = document.createElement('iframe')
    createFrameController(frameElement, iframeUrl, subject)

    frameElement.style.visibility = 'unset'
    expect(frameElement.style.height).toBe('0px')
    subject.frameHeight$.next(50)

    jest.runAllTimers()

    expect(frameElement.style.height).toBe('50px')

    jest.useRealTimers()
  })

  test('should not change frame height when hidden', () => {
    const iframeUrl = 'http://localhost:8000'
    const frameElement = document.createElement('iframe')
    createFrameController(frameElement, iframeUrl, subject)

    frameElement.style.visibility = 'hidden'
    expect(frameElement.style.height).toBe('0px')
    subject.frameHeight$.next(50)
    expect(frameElement.style.height).toBe('0px')
  })

  test('should show the iframe when options loaded', () => {
    jest.useFakeTimers()

    const iframeUrl = 'http://localhost:8000'
    const frameElement = document.createElement('iframe')
    createFrameController(frameElement, iframeUrl, subject)

    subject.optionsLoaded$.next(true)

    jest.runAllTimers()

    expect(frameElement.style.visibility).toBe('unset')
    expect(frameElement.style.display).toBe('unset')

    jest.useRealTimers()
  })
})
