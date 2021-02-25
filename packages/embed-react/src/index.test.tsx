jest.mock('@gr4vy/embed', () => ({
  __esModule: true,
  setup: jest.fn(),
}))

import { setup } from '@gr4vy/embed'
import { mount } from 'enzyme'
import React from 'react'
import { Props } from './types'
import Gr4vyEmbed from './'

const options: Props & { channel: string } = {
  intent: 'capture',
  iframeHost: `localhost:8080`,
  apiHost: `localhost:3100`,
  bearerToken: `123456`,
  channel: `mychannel`,
  amount: 200,
  currency: 'GBP',
  onEvent: jest.fn(),
  environment: 'development',
}

test(`should default to be not loaded`, () => {
  mount(<Gr4vyEmbed {...options} />)
  expect(setup).toHaveBeenCalledWith({
    amount: 200,
    apiHost: 'localhost:3100',
    bearerToken: '123456',
    intent: 'capture',
    channel: 'mychannel',
    currency: 'GBP',
    element: expect.any(HTMLDivElement),
    iframeHost: 'localhost:8080',
    onEvent: expect.any(Function),
    environment: 'development',
  })
})
