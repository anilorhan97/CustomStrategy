import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBComponentComponent } from './second-bcomponent.component';

describe('SecondBComponentComponent', () => {
  let component: SecondBComponentComponent;
  let fixture: ComponentFixture<SecondBComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondBComponentComponent]
    });
    fixture = TestBed.createComponent(SecondBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
