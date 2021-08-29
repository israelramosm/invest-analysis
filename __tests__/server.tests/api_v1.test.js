import moxios from 'moxios'
import request from 'supertest'

import initServer from '../../__mocks__/mockapp'
import v1 from '../../server/routes/v1'

const BASE_URL = '/api/v1'
const URL = `${BASE_URL}/tests`

describe('API v1 tests', () => {
  let server

  beforeEach(() => {
    moxios.install()
    server = initServer(v1, BASE_URL)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('GET /api/v1', async (done) => {
    const res = await request(server).get(BASE_URL)

    expect(res.body.message).toEqual('Hello /api/v1!')
    done()
  })

  test('GET /api/v1/tests', async (done) => {
    const res = await request(server).get(URL)

    expect(res.body.message).toEqual('GET /api/tests')
    done()
  })

  test('GET /api/v1/tests/:testId', async (done) => {
    const res = await request(server).get(`${URL}/123`)

    expect(res.body.message).toEqual('GET /api/test')
    done()
  })

  test('POST /api/v1/tests:testId', async (done) => {
    const res = await request(server).post(`${URL}/123`)

    expect(res.body.message).toEqual('POST /api/test')
    done()
  })

  test('PUT /api/v1/tests:testId', async (done) => {
    const res = await request(server).put(`${URL}/123`)

    expect(res.body.message).toEqual('PUT /api/test')
    done()
  })

  test('PUT /api/v1/tests:testId', async (done) => {
    const res = await request(server).delete(`${URL}/123`)

    expect(res.body.message).toEqual('DELETE /api/test')
    done()
  })
})
