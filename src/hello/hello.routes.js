const registerHelloRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/hello',
    handler: (req, h) => {
      return { message: `Hello ${req.query.name}`}
    }
  })
}

module.exports = registerHelloRoutes