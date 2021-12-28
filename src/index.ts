import server from './server';

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3000;

server.listen(FASTIFY_PORT);
// eslint-disable-next-line no-console
console.log(`Server running on port ${FASTIFY_PORT}`);
