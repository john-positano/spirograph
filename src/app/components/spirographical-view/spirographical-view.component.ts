import { Component, OnInit } from '@angular/core';
import { WebglRendererService } from '../../services/webgl-renderer.service';
import { Scene, Camera } from '../../../../node_modules/three/build/three.module.js';

@Component({
  selector: 'app-spirographical-view',
  templateUrl: './spirographical-view.component.html',
  styleUrls: ['./spirographical-view.component.css']
})
export class SpirographicalViewComponent implements OnInit {

  constructor(private Renderer: WebglRendererService, private View: Camera) { }

  ngOnInit() {

  }

  render(scene: Scene, camera: Camera) {
    this.Renderer.render(scene, camera);
  }
}
