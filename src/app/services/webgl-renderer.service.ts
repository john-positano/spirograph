import { Injectable } from '@angular/core';
import { WebGLRenderer, Scene, Camera } from '../../../node_modules/three/build/three.module.js';

@Injectable({
  providedIn: 'root'
})
export class WebglRendererService {

  constructor() { }

  render (scene: Scene, camera: Camera) {

  }
}
