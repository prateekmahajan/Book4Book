const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const helmet = require('helmet')
const compression = require('compression')
const app = express()


// Unexpected Error Handling
process.on('uncaughtException', (error) => console.log('Uncaught Exceptions', error))
process.on('unhandledRejection', (error) => console.log('Unhandled Rejections', error))


// Middlewares and Routes
app.use(express.json())
app.use(helmet())
app.use(compression())
app.get('/', (request, response) => response.send('Deployment is successful and site is live'))




// Connecting database and starting server
mongoose.connect(config.get('db'))
  .then(async (resolve) => {
    console.log('Connected to database', resolve.connection.host)
    app.listen(config.get('port'), () => console.log(`Listning in port ${config.get('port')}...`))
  })
  .catch(reject => console.log("Can't connect to database", reject))


//Logs
console.log('Current environment : ', process.env.NODE_ENV);
console.log(config.get('port') ? 'PORT set successfully' : "Port environment variable not set");
console.log(config.get('db') ? 'DB set successfully' : "DB environment variable not set");



// Error handling to notify client
app.use((error, request, response, next) => {
  console.log('Final error handler @ Index', error);
  response.status(500).send('Internal Error')
})