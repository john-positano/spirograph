import { TestBed } from '@angular/core/testing';

import { WebglRendererService } from './webgl-renderer.service';

describe('WebglRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebglRendererService = TestBed.get(WebglRendererService);
    expect(service).toBeTruthy();
  });
});
