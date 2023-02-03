import express from "express"
import morgan from "morgan"
import * as config from './config'
import * as requestError from './errors'
import { controlerLoader } from './lib/controller/controllerLoader'

export function setUpApp(controllers: {[key: string]: any}) {
  const app = express()
  app.use(express.json())
  if(config.env === 'development'){
    app.use(morgan('dev'))
  }

  app.use('/api/v2', controlerLoader(controllers))

  // Error handling
  app.use(requestError.requestZodErrorHander)
  app.use(requestError.requestErrorHandler)
  
  return app
}
