import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurlistComponent } from './ourlist.component';

describe('OurlistComponent', () => {
  let component: OurlistComponent;
  let fixture: ComponentFixture<OurlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
