import { Controller, GET } from 'fastify-decorators';

@Controller({ route: '/example' })
export default class ExampleController {
  @GET()
  public async get() {
    return 'response text';
  }
}
