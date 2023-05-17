import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dex1Component } from './dex1.component';

describe('Dex1Component', () => {
  let component: Dex1Component;
  let fixture: ComponentFixture<Dex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dex1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
