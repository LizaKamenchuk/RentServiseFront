import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExtraDataFormComponent } from './user-extra-data-form.component';

describe('UserExraDataFormComponent', () => {
  let component: UserExtraDataFormComponent;
  let fixture: ComponentFixture<UserExtraDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserExtraDataFormComponent]
    });
    fixture = TestBed.createComponent(UserExtraDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
