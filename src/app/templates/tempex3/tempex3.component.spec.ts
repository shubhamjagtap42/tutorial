import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempex3Component } from './tempex3.component';

describe('Tempex3Component', () => {
  let component: Tempex3Component;
  let fixture: ComponentFixture<Tempex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempex3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tempex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
