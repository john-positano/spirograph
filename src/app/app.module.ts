import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpirographProjectorComponent } from './components/spirograph-projector/spirograph-projector.component';
import { SpirographRouterModule } from './routers/spirograph-router.module';
import { SpirographicalViewComponent } from './components/spirographical-view/spirographical-view.component';
import { WebglRendererService } from './services/webgl-renderer.service';
import { Scene, Camera } from '../../node_modules/three/build/three.module.js';

@NgModule({
  declarations: [
    SpirographProjectorComponent,
    SpirographicalViewComponent
  ],
  imports: [
    BrowserModule,
    SpirographRouterModule
  ],
  providers: [
    WebglRendererService,
    Scene,
    Camera
  ],
  bootstrap: [SpirographProjectorComponent]
})
export class AppModule { }
