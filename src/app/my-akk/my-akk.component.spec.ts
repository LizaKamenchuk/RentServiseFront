import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAkkComponent } from './my-akk.component';

describe('MyAkkComponent', () => {
  let component: MyAkkComponent;
  let fixture: ComponentFixture<MyAkkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAkkComponent]
    });
    fixture = TestBed.createComponent(MyAkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
