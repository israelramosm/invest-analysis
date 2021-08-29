import moxios from 'moxios'
import request from 'supertest'

import initServer from '../../__mocks__/mockapp'
import base from '../../server/routes/base'

const BASE_URL = '/api'
const URL = `${BASE_URL}/tests`

describe('API base tests', () => {
  let server

  beforeEach(() => {
    moxios.install()
    server = initServer(base, BASE_URL)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('GET /api', async (done) => {
    const res = await request(server).get(BASE_URL)

    expect(res.body.message).toEqual('Hello /api!')
    done()
  })

  test('GET /api/tests', async (done) => {
    const res = await request(server).get(URL)

    expect(res.body.message).toEqual('GET /api/tests')
    done()
  })

  test('GET /api/tests/:testId', async (done) => {
    const res = await request(server).get(`${URL}/123`)

    expect(res.body.message).toEqual('GET /api/test')
    done()
  })

  test('POST /api/tests:testId', async (done) => {
    const res = await request(server).post(`${URL}/123`)

    expect(res.body.message).toEqual('POST /api/test')
    done()
  })

  test('PUT /api/tests:testId', async (done) => {
    const res = await request(server).put(`${URL}/123`)

    expect(res.body.message).toEqual('PUT /api/test')
    done()
  })

  test('PUT /api/tests:testId', async (done) => {
    const res = await request(server).delete(`${URL}/123`)

    expect(res.body.message).toEqual('DELETE /api/test')
    done()
  })
})
