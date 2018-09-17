import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirographicalViewComponent } from './spirographical-view.component';

describe('SpirographicalViewComponent', () => {
  let component: SpirographicalViewComponent;
  let fixture: ComponentFixture<SpirographicalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpirographicalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpirographicalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
