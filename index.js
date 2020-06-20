const http = require('http')
const app = require('./app')
const config = require('./config/config')
const mongoPrueba = require('./services/mongo')

const server = http.createServer(app)
server.listen(process.env.PORT || config.port)
console.log(`Ya prendí en el ${config.port}`);
