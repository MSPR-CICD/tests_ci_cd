const Joi = require("@hapi/joi");

const registerHelloRoutes = server => {
  server.route({
    method: "GET",
    path: "/hello",
    options: {
      description: "Says hello to the given name",
      tags: ["api"],
      validate: {
        query: Joi.object({
          name: Joi.string().required()
        })
      }
    },
    handler: req => {
      return { message: `Hello ${req.query.name}` };
    }
  });
};

module.exports = registerHelloRoutes;
