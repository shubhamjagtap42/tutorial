import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempex1Component } from './tempex1.component';

describe('Tempex1Component', () => {
  let component: Tempex1Component;
  let fixture: ComponentFixture<Tempex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempex1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tempex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
