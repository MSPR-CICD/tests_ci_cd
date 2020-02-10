const registerHelloRoutes = (server) => {
  server.route({
    method: 'GET',
    path: '/hello',
    handler: (req, h) => {
      return { message: `Hello ${req.query.name}`}
    }, 
    options: {
      description: 'Says hello to the given name',
      tags: ['api'],
    } 
  })
}

module.exports = registerHelloRoutes