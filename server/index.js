import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import serve from 'koa-static'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import restc from 'restc'
import routing from './routes/'
import { port, connexionString } from './config'

mongoose.Promise = global.Promise;
mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

// Create Koa Application
const app = new Koa()

app
  .use(logger())
  // .use(restc.koa2())
  .use(bodyParser())
  .use(serve(__dirname+ "/template/",{ extensions: ['html']}))

routing(app)

// Start the application
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

export default app
