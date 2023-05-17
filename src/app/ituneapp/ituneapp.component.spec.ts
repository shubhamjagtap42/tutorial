import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITUNEAPPComponent } from './ituneapp.component';

describe('ITUNEAPPComponent', () => {
  let component: ITUNEAPPComponent;
  let fixture: ComponentFixture<ITUNEAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITUNEAPPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITUNEAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
