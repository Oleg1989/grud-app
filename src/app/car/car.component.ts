import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewChecked
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, AfterViewChecked {

  @Input() aCarId!: string;
  @Input() stateNumber = new FormControl('');
  @Input() manufacturerName = new FormControl('');
  @Input() modelName = new FormControl('');
  @Input() yearOfProduction = new FormControl('');
  @Output() deleteCar: EventEmitter<any> = new EventEmitter();

  arrYearOfProduction: number[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    for (let i = 1990; i <= 2021; i++) {
      this.arrYearOfProduction.push(i);
    }
  }

  delete(event: Event) {
    this.deleteCar.emit(event);
  }

  ngAfterViewChecked() {
    this.carService.editCar(
      {
        aCarId: this.aCarId,
        stateNumber: this.stateNumber.value,
        manufacturerName: this.manufacturerName.value,
        modelName: this.modelName.value,
        yearOfProduction: this.yearOfProduction.value,
      }
    );
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName in changes) {
  //     const chng = changes[propName];
  //     const cur = chng.currentValue;
  //     const prev = chng.previousValue;
  //     this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   }
  // }
  // private log(msg: string) {
  //   console.log(msg);
  // }
}
