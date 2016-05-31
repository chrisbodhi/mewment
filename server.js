const Server = require('hapi').Server;
const inert = require('inert');

const server = new Server();
const port = process.env.PORT || 3000;

server.connection({ port });

server.register(inert, (err) => {
  if (err) {
    throw new Error(`Problem loading files: ${err}`);
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/bundle.js',
    handler: {
      file: './public/bundle.js'
    }
  });
});

server.start((err) => {
  if (err) {
    throw new Error(`Problem starting server: ${err}`);
  }

  // eslint-disable-next-line no-console
  console.log(`Server running at ${server.info.uri}`);
});
