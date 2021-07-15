import { createSubjectManager } from '../subjects'
import { mutableRef } from '../utils'
import { createPopupController } from './popup'
import { openPopup, redirectPopup } from './redirect-popup'

jest.mock('./redirect-popup')
jest.useFakeTimers()

describe('registerSubscriptions', () => {
  const popup = mutableRef<{ popup: Window; stopCallback: () => void }>()
  let subject

  beforeEach(() => {
    // reset mocks
    ;(openPopup as jest.Mock).mockReset()

    subject = createSubjectManager()

    // setup
    popup.current = null
    createPopupController(popup, subject)
  })

  test('opens a popup when a transaction requires approval', () => {
    const mockPopup = jest.fn()
    ;(openPopup as jest.Mock).mockReturnValue(mockPopup)
    subject.mode$.next({
      popup: {
        title: 'Test',
        message: 'Test Message',
      },
    })
    subject.approvalStarted$.next()
    expect(openPopup).toHaveBeenCalled()
    expect(popup.current).toEqual(mockPopup)
  })

  test('redirects popup when an approval url is available', () => {
    const mockPopup = {
      popup: jest.fn(),
      stopCallback: jest.fn(),
    } as any
    popup.current = mockPopup
    subject.approvalUrl$.next('test-url')
    expect(redirectPopup).toHaveBeenCalledWith(mockPopup.popup, 'test-url')
  })

  test('checks to redirect popup when an approval url is available', () => {
    popup.current = null
    subject.approvalUrl$.next('test-url')
  })

  test('closes popup when approval is complete', () => {
    const mockPopup = {
      popup: {
        close: jest.fn(),
      },
      stopCallback: jest.fn(),
    } as any
    popup.current = mockPopup
    subject.approvalCompleted$.next()
    expect(mockPopup.popup.close).toHaveBeenCalled()
  })

  test('checks to close popup when approval is complete', () => {
    popup.current = null
    subject.approvalCompleted$.next()
  })

  test('closes popup when transaction has failed', () => {
    const mockPopup = {
      popup: {
        close: jest.fn(),
      },
      stopCallback: jest.fn(),
    } as any
    popup.current = mockPopup
    subject.transactionFailed$.next()
    expect(mockPopup.stopCallback).toHaveBeenCalled()
    expect(mockPopup.popup.close).toHaveBeenCalled()
  })

  test('checks to close popup when transaction has failed', () => {
    popup.current = null
    subject.transactionFailed$.next()
  })

  test('cancels approval when popup is closed', (done) => {
    const mockPopup = {
      popup: {
        close: jest.fn(),
      },
      stopCallback: jest.fn(),
    }
    subject.mode$.next({
      popup: {
        title: 'Test',
        message: 'Test Message',
      },
      overlay: {
        title: 'Test',
      },
    })
    ;(openPopup as jest.Mock).mockReturnValue(mockPopup)
    subject.approvalStarted$.next()
    const closeCallback = (openPopup as jest.Mock).mock.calls[0][2]
    subject.approvalCancelled$.subscribe(() => {
      done()
    })
    closeCallback()
  })

  test('checks to close popup when approval is cancelled', () => {
    popup.current = null
    subject.approvalCancelled$.next()
  })

  test('restarts approval when lost', () => {
    subject.approvalUrl$.next('test-url')
    subject.mode$.next({
      popup: {
        title: 'Test',
        message: 'Test Message',
      },
      overlay: {
        title: 'Test',
      },
    })
    const mockPopup = {
      popup: {
        close: jest.fn(),
      },
      stopCallback: jest.fn(),
    } as any
    popup.current = mockPopup
    let hasApprovalStarted = false
    let hasApprovalUrlBeenReplayed = false
    subject.approvalStarted$.subscribe(() => (hasApprovalStarted = true))
    subject.approvalUrl$.subscribe(() => (hasApprovalUrlBeenReplayed = true))
    subject.approvalLost$.next()
    expect(mockPopup.stopCallback).toHaveBeenCalled()
    expect(mockPopup.popup.close).toHaveBeenCalled()
    expect(hasApprovalStarted).toBeTruthy()
    expect(hasApprovalUrlBeenReplayed).toBeTruthy()
  })

  test('restarts approval without an approval url', () => {
    subject.approvalUrl$.next(null)
    subject.mode$.next({
      popup: {
        title: 'Test',
        message: 'Test Message',
      },
      overlay: {
        title: 'Test',
      },
    })
    const mockPopup = {
      popup: {
        close: jest.fn(),
      },
      stopCallback: jest.fn(),
    } as any
    popup.current = mockPopup
    let hasApprovalUrlBeenReplayed = false
    subject.approvalUrl$.subscribe(() => (hasApprovalUrlBeenReplayed = true))
    subject.approvalLost$.next()
    expect(hasApprovalUrlBeenReplayed).toBeFalsy()
  })
})
