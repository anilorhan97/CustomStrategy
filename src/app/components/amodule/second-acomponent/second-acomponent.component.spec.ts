import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAComponentComponent } from './second-acomponent.component';

describe('SecondAComponentComponent', () => {
  let component: SecondAComponentComponent;
  let fixture: ComponentFixture<SecondAComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondAComponentComponent]
    });
    fixture = TestBed.createComponent(SecondAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
