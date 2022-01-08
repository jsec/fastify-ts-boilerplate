import { Controller, GET } from 'fastify-decorators';

@Controller({ route: '/' })
export default class RootController {
  @GET()
  public async get() {
    return { root: true };
  }
}
