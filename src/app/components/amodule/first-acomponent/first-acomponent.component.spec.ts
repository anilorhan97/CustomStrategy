import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAComponentComponent } from './first-acomponent.component';

describe('FirstAComponentComponent', () => {
  let component: FirstAComponentComponent;
  let fixture: ComponentFixture<FirstAComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstAComponentComponent]
    });
    fixture = TestBed.createComponent(FirstAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
