const { ResponseError } = require('./response')
const checkRequest = require('./checkRequest')

const VALID_REQUEST = {
  httpMethod: 'POST',
  path: '/.netlify/functions/messages',
  headers: {
    'content-type': 'application/json'
  },
  body: '{foo:bar}'
}

describe('Message checkRequest()', () => {
  it('allows valid requests', () => {
    expect(checkRequest(VALID_REQUEST)).toBe(null)
  })

  it('rejects disallowed methods', () => {
    const getRequest = {...VALID_REQUEST, httpMethod: 'GET'}
    expect(() => checkRequest(getRequest)).toThrow(ResponseError)
    // additional methods omitted
  })
  // additional tests omitted
})