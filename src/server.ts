import { setUpApp } from './app'
import * as config from './config'
import { controllerConfig } from './controllers'

const app = setUpApp(controllerConfig)

app.listen(config.PORT, () => {
  console.log(`Express app listen on port: ${config.PORT}`)
})
