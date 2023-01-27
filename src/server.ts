import express from 'express'
import morgan from 'morgan'
import * as config from './config'
import router from './routes'
import * as requestError from './errors'
import { controlerLoader } from './lib/controller/controllerLoader'
import { KlassController } from './klass/klass.controller'
import { KlassInteractor } from './klass/klass.interactor'
import { KlassPrismaRepository } from './klass/klass.prisma'

const app = express()
app.use(express.json())
if(config.env === 'development'){
  app.use(morgan('dev'))
}

app.use('/api/v1', router)
const r = controlerLoader({
  'classes': new KlassController(new KlassInteractor(new KlassPrismaRepository())),
})
app.use('/api/v2', r)

// Error handling
app.use(requestError.requestZodErrorHander)
app.use(requestError.requestErrorHandler)

app.listen(config.PORT, () => {
  console.log(`Express app listen on port: ${config.PORT}`)
})
