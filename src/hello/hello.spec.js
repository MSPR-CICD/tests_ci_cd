const Hapi = require('@hapi/hapi');
const registerHelloRoutes = require('./hello.routes')

describe('GET /hello?name=<name>', () => {
  let server;

  beforeEach(() => {
    server = Hapi.server({
      host: 'localhost',
      port: 3000
    });
    registerHelloRoutes(server)
  });

  afterEach(async () => {
    await server.stop();
  });

  it('says hello to the given name', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/hello?name=michel'
    });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.payload).message).toEqual('Hello michel');
  })
})