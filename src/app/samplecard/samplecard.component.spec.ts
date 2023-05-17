import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecardComponent } from './samplecard.component';

describe('SamplecardComponent', () => {
  let component: SamplecardComponent;
  let fixture: ComponentFixture<SamplecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
