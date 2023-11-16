import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCComponentComponent } from './first-ccomponent.component';

describe('FirstCComponentComponent', () => {
  let component: FirstCComponentComponent;
  let fixture: ComponentFixture<FirstCComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCComponentComponent]
    });
    fixture = TestBed.createComponent(FirstCComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
