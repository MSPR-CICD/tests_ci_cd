const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

server.start().then(() => console.log(`Server running on ${server.info.uri}`))