import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent {
  
  @Input() value: number = 0;
  @Input() minValue: number = 0;
  @Input() maxValue: number = Infinity;

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    if (this.value < this.maxValue) {
      this.value++;
      this.valueChange.emit(this.value);
    }
  }

  decrement() {
    if (this.value > this.minValue) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }
}
