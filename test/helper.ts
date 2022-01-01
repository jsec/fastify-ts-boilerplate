import Fastify from 'fastify';
import fp from 'fastify-plugin';
import App from '../src/app';

// Fill in this config with all the configurations
// needed for testing the application
async function config() {
  return {};
}

// Automatically build and tear down our instance
async function build() {
  const app = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), await config());

  await app.ready();

  return app;
}

export { config, build };
