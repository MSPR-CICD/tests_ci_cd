const Hapi = require('@hapi/hapi');
const registerHelloRoutes = require('./hello/hello.routes')

const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

registerHelloRoutes(server)

server.start().then(() => console.log(`Server running on ${server.info.uri}`))