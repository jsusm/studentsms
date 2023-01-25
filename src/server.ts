import express from 'express'
import morgan from 'morgan'
import * as config from './config'

const app = express()
if(config.env === 'development'){
  app.use(morgan('dev'))
}

app.listen(config.PORT, () => {
  console.log(`Express app listen on port: ${config.PORT}`)
})
