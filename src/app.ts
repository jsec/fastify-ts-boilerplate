import { join, resolve } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import { bootstrap } from 'fastify-decorators';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });

  fastify.register(bootstrap, {
    directory: resolve(__dirname, 'controllers'),
    mask: /\.controller\./,
  });
};

export default app;
export { app };
