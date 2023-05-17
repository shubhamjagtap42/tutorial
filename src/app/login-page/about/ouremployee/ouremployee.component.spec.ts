import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuremployeeComponent } from './ouremployee.component';

describe('OuremployeeComponent', () => {
  let component: OuremployeeComponent;
  let fixture: ComponentFixture<OuremployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuremployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuremployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
