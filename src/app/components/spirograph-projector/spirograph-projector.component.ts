import { Component, OnInit } from '@angular/core';
import { Scene } from '../../../../node_modules/three/build/three.module.js';

@Component({
  selector: 'app-spirograph-projector',
  templateUrl: './spirograph-projector.component.html',
  styleUrls: ['./spirograph-projector.component.css']
})
export class SpirographProjectorComponent implements OnInit {

  constructor(scene: Scene) { }

  ngOnInit() {
    
  }

}
