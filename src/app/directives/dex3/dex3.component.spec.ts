import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dex3Component } from './dex3.component';

describe('Dex3Component', () => {
  let component: Dex3Component;
  let fixture: ComponentFixture<Dex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dex3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
