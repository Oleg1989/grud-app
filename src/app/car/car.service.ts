import { Injectable } from '@angular/core';
import { Car } from '../class/car';

import { CarEntity } from '../interface/car-entity';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [];

  constructor() { }

  get getCars(): Car[] {
    return this.cars;
  }

  add(): void {
    this.cars.push(new Car());
  }

  delete(id: string): void {
    this.cars = this.cars.filter(car => car.aCarId !== id);
  }

  editCar(editCar: CarEntity) {
    this.cars.forEach(car => {
      if (car.aCarId === editCar.aCarId) {
        car.setModelName = editCar.modelName;
        car.setStateNumber = editCar.stateNumber;
        car.setManufacturerName = editCar.manufacturerName;
        car.setYearOfProduction = editCar.yearOfProduction;
      }
    });
  }
}
