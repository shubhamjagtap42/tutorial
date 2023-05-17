import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempex2Component } from './tempex2.component';

describe('Tempex2Component', () => {
  let component: Tempex2Component;
  let fixture: ComponentFixture<Tempex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tempex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
