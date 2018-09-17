import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpirographicalViewComponent } from '../components/spirographical-view/spirographical-view.component';

const routes: Routes = [
  {
    path: '',
    component: SpirographicalViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SpirographRouterModule { }
