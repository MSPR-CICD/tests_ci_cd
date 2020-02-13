const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const package = require("../package");
const registerHelloRoutes = require("./hello/hello.routes");

const server = Hapi.server({
  host: "localhost",
  port: process.env.PORT || 3000
});

const swaggerOptions = {
  info: {
    title: "Test API Documentation",
    version: package.version
  }
};

server
  .register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ])
  .then(() => {
    registerHelloRoutes(server);
  })
  .then(() => {
    server.start();
  })
  .then(() => console.log(`Server running on ${server.info.uri}`));
