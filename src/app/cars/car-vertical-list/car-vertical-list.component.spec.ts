import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVerticalListComponent } from './car-vertical-list.component';

describe('CarVerticalListComponent', () => {
  let component: CarVerticalListComponent;
  let fixture: ComponentFixture<CarVerticalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarVerticalListComponent]
    });
    fixture = TestBed.createComponent(CarVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
