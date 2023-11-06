import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFormComponent } from './error-form.component';

describe('ErrorFormComponent', () => {
  let component: ErrorFormComponent;
  let fixture: ComponentFixture<ErrorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorFormComponent]
    });
    fixture = TestBed.createComponent(ErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
