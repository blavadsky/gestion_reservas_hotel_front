import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPickerComponent } from './number-picker.component';

describe('NumberPickerComponent', () => {
  let component: NumberPickerComponent;
  let fixture: ComponentFixture<NumberPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPickerComponent]
    });
    fixture = TestBed.createComponent(NumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
