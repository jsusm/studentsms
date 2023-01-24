import express from 'express'
import morgan from 'morgan'

const app = express()
const env = process.env.NODE_ENV || 'development'
if(env === 'development'){
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Express app listen on port: ${PORT}`)
})
