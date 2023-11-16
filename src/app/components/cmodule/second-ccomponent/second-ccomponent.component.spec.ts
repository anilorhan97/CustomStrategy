import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCComponentComponent } from './second-ccomponent.component';

describe('SecondCComponentComponent', () => {
  let component: SecondCComponentComponent;
  let fixture: ComponentFixture<SecondCComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondCComponentComponent]
    });
    fixture = TestBed.createComponent(SecondCComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
