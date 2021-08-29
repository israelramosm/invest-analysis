import express from 'express'
import bodyParser from 'body-parser'

const initServer = (apiFunc, baseUrl) => {
  const app = express()
  const route = express.Router()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  apiFunc(app, baseUrl, route)

  return app
}

export default initServer
