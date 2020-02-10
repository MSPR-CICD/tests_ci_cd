const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');
const registerHelloRoutes = require('./hello/hello.routes');

const server = Hapi.server({
  host: 'localhost',
  port: 3000
});


const swaggerOptions = {
  info: {
    title: 'Test API Documentation',
    version: Pack.version,
  },
};

server.register([
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
]).then(() => {
  registerHelloRoutes(server)
}).then(() => {
  server.start()
}).then(() => console.log(`Server running on ${server.info.uri}`))

