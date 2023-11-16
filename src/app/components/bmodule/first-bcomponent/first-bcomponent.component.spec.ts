import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBComponentComponent } from './first-bcomponent.component';

describe('FirstBComponentComponent', () => {
  let component: FirstBComponentComponent;
  let fixture: ComponentFixture<FirstBComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstBComponentComponent]
    });
    fixture = TestBed.createComponent(FirstBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
