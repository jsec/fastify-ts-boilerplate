import fastify from 'fastify';

const server = fastify();

const start = async () => {
  try {
    await server.listen(3000);
    console.log('listening on port 3000');
  } catch (err) {
    server.log.error(err);
    process.exit();
  }
};

start();
