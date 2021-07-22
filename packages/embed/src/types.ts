export type Config = {
  element: HTMLElement // The element to insert the integration at
  form: Element // The form to bind the integration to
  amount: number // The amount of a given currency to charge
  intent?: 'authorize' | 'capture' | 'approve' // Defines the intent of this API call. This determines the desired initial state of the transaction.
  currency: string // Currency to charge the amount in
  token: string // the JWT access token used to authenticate the API
  showButton?: boolean // wether to show a submit button in the embedded frame
  debug?: boolean // wether to output any debug messages.
  onEvent?: (eventName: string, data: any) => void // a callback function that's used to subscribe to events
  externalIdentifier?: string // an optional external identifier
  preferResponse?: string // a development option that allows sending a `Prefer` header to force a certain API response from dev servers
  buyerId?: string // the ID of the buyer to associate the payment methods to
  buyerExternalIdentifier?: string // the external ID of the buyer to associate the payment methods to
  environment?: 'development' | 'staging' | 'production'
  store?: 'ask' | boolean
  country: string
  iframeHost: string
  iframeUrl: string
  apiUrl: string
  apiHost: string
  theme?: ThemeOptions // Theming options
  locale?: string //  < ISO 639 Language Code > - < ISO 3166 Country Code (optional) >
  display?: 'storedOnly' | 'addOnly' | 'all'
  onComplete?: (transaction: Transaction) => void
  channel: string
  iframeSrc: string
}

export type Transaction = {
  id: string
  status: string
  paymentMethod?: { id?: string }
}

export type SetupConfig = Omit<
  Config,
  | 'iframeHost'
  | 'apiHost'
  | 'apiUrl'
  | 'iframeUrl'
  | 'channel'
  | 'element'
  | 'form'
  | 'iframeSrc'
> & {
  gr4vyId?: string
  iframeHost?: string
  apiHost?: string
  element: string | HTMLElement | Element
  form: string | HTMLElement | Element
}

type BorderWidth = 'none' | 'thin' | 'thick' // maps to 0, 1, 2

type Radii = 'none' | 'subtle' | 'rounded' // maps to 0, 2, 4

export type ThemeOptions = {
  fonts?: {
    /**
     * System or a valid Google font that will be downloaded (should support weights 400,600 and 700)
     */
    body?: string
  }
  borderWidths?: {
    /**
     * Bounding boxes that are not inputs.
     */
    container?: BorderWidth
    /**
     * Inputs, Radios and Checkbox borders
     */
    input?: Omit<BorderWidth, 'none'>
  }
  colors?: {
    /**
     * Used to highlight interactive elements/call-to-actions.
     */
    primary?: string
    /**
     * Text is set globally for all text, subtle is for hints.
     */
    text?: string
    subtleText?: string
    /**
     * Bounding boxes that are not input elements
     */
    containerBackgroundUnchecked?: string
    containerBackground?: string
    containerBorder?: string
    /**
     * Main page background
     */
    pageBackground?: string
    inputBorder?: string
    inputText?: string
    inputBackground?: string
    /**
     * Info is used for loading bars or displaying information.
     */
    info?: string
    infoBackground?: string
    infoText?: string
    /**
     * Danger is used for error messages and destructive actions
     */
    danger?: string
    dangerBackground?: string
    dangerText?: string
    /**
     * Focus ring around interactive elements
     */
    focus?: string
  }
  radii?: {
    /**
     * Input Radii
     */
    input?: Radii
    /**
     * Bounding boxes that are not inputs.
     */
    container?: Radii
  }
  shadows?: {
    /**
     * Focus ring around interactive elements
     */
    focusRing?: string
  }
}
