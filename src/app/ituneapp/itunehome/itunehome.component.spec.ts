import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunehomeComponent } from './itunehome.component';

describe('ItunehomeComponent', () => {
  let component: ItunehomeComponent;
  let fixture: ComponentFixture<ItunehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItunehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItunehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
