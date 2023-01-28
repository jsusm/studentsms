import express from 'express'
import morgan from 'morgan'
import * as config from './config'
import router from './routes'
import * as requestError from './errors'
import { controllerRouter } from './controllers'

const app = express()
app.use(express.json())
if(config.env === 'development'){
  app.use(morgan('dev'))
}

app.use('/api/v1', router)
app.use('/api/v2', controllerRouter)

// Error handling
app.use(requestError.requestZodErrorHander)
app.use(requestError.requestErrorHandler)

app.listen(config.PORT, () => {
  console.log(`Express app listen on port: ${config.PORT}`)
})
