import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByDateComponent } from './searchByDate.component';

describe('DatePickerComponent', () => {
  let component: SearchByDateComponent;
  let fixture: ComponentFixture<SearchByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByDateComponent]
    });
    fixture = TestBed.createComponent(SearchByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
