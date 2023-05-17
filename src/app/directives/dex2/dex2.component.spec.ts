import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dex2Component } from './dex2.component';

describe('Dex2Component', () => {
  let component: Dex2Component;
  let fixture: ComponentFixture<Dex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
