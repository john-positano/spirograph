import { SpirographRouterModule } from './spirograph-router.module';

describe('SpirographRouterModule', () => {
  let spirographRouterModule: SpirographRouterModule;

  beforeEach(() => {
    spirographRouterModule = new SpirographRouterModule();
  });

  it('should create an instance', () => {
    expect(spirographRouterModule).toBeTruthy();
  });
});
