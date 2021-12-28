import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const exampleRoute = (fastify: FastifyInstance, options, next) => {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'GOT' });
  });

  next();
};

export default exampleRoute;
