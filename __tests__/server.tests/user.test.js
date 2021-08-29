import moxios from 'moxios'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

import initServer from '../../__mocks__/mockapp'
import base from '../../server/routes/base'

const BASE_URL = '/api'
const opts = { useCreateIndex: true, useNewUrlParser: true }

describe('User Auth tests', () => {
  let server
  let mongoServer

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer()
    const mongoUri = await mongoServer.getConnectionString()
    await mongoose.connect(mongoUri, opts, (err) => {
      if (err) console.error(err)
    })
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoServer.stop()
  })

  beforeEach(() => {
    moxios.install()
    server = initServer(base, BASE_URL)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('POST /api/login', async (done) => {
    const res = await request(server).post(`${BASE_URL}/login`)

    expect(res.body.message).toEqual('Sucess! You are login.')
    done()
  })

  test('POST /api/signup', async (done) => {
    const res = await request(server)
      .post(`${BASE_URL}/signup`)
      .send({ email: 'example@domain.com', password: 'password' })

    expect(res.body.email).toEqual('example@domain.com')
    expect(res.body.password).toEqual('password')
    done()
  })

  test('GET /api/logout', async (done) => {
    const res = await request(server).get(`${BASE_URL}/logout`)

    expect(res.body.message).toEqual('Sucess! You are logout.')
    done()
  })
})
