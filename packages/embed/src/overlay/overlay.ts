import { SubjectManager } from '../subjects'
import { removeChildren } from '../utils'

let isFirstLoad = true

const html = String.raw

export const createOverlayController = (
  element: HTMLDivElement,
  subject: SubjectManager
) => {
  if (isFirstLoad) {
    require('./overlay.css')
    isFirstLoad = false
  }

  element.className = `gr4vy__overlay gr4vy__overlay--hidden`

  const Title = document.createElement('div')
  const Prompt = document.createElement('div')
  const Notice = document.createElement('div')
  Notice.className = 'gr4vy__overlay__notice '
  Notice.appendChild(Title)
  Notice.appendChild(Prompt)

  const Link = document.createElement('div')
  Link.className = 'gr4vy__overlay__link'
  Link.addEventListener('click', () => subject.approvalLost$.next())

  const CancelLink = document.createElement('div')
  CancelLink.className = 'gr4vy__overlay__link'
  CancelLink.addEventListener('click', () => subject.approvalCancelled$.next())

  const Container = document.createElement('div')
  Container.className = 'gr4vy__overlay__container'

  element.appendChild(Container)

  const hide = () => {
    element.className = 'gr4vy__overlay gr4vy__overlay--hidden'
    removeChildren(Container)
  }

  const show = () => {
    element.className = 'gr4vy__overlay'
  }

  const setMessage = ({ title, link, message, cancel }) => {
    Title.textContent = title
    Link.textContent = link
    Prompt.textContent = message
    CancelLink.textContent = cancel
    Container.appendChild(Notice)
    Container.appendChild(Link)
    Container.appendChild(CancelLink)
  }

  const setFrame = (src) => {
    Container.innerHTML = html`
      <iframe
        src="${src}"
        frameborder="0"
        class="gr4vy__frame"
        allowtransparency="true"
      ></iframe>
    `
  }

  subject.approvalStarted$.subscribe(() => {
    const { overlay } = subject.mode$.value()
    setMessage(overlay)
    show()
  })
  subject.approvalCompleted$.subscribe(hide)
  subject.approvalCancelled$.subscribe(hide)
  subject.transactionFailed$.subscribe(hide)

  // assume an approval url with pre-defined overlay is an iframe
  subject.approvalUrl$.subscribe((url) => {
    if (!subject.mode$.value()?.overlay) {
      setFrame(url)
      show()
    }
  })

  subject.transactionCreated$.subscribe(hide)
}
