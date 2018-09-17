import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirographProjectorComponent } from './spirograph-projector.component';

describe('SpirographProjectorComponent', () => {
  let component: SpirographProjectorComponent;
  let fixture: ComponentFixture<SpirographProjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpirographProjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpirographProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
