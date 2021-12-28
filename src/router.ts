import { FastifyInstance } from 'fastify';
import exampleRoute from './routes/example.route';

export default async function router(fastify: FastifyInstance): Promise<void> {
  fastify.register(exampleRoute, { prefix: "/example" });
}
