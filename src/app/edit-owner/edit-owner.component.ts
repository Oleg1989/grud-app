import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import * as cuid from 'cuid';

import { CarEntity } from '../interface/car-entity';
import { OwnerEntity } from '../interface/owner-entity';
import { OwnerService } from '../owners/service/owner.service';
import { Car } from '../class/car';
import { CarService } from '../car/car.service';
import { EditOwnerService } from './service/edit-owner.service';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {

  owner!: OwnerEntity | undefined;
  aCars!: CarEntity[];
  arrYearOfProduction: number[] = [];
  profileForm = this.fb.group({
    aLastName: [''],
    aFirstName: [''],
    aMiddleName: [''],
    cars: this.fb.array([
      this.fb.control(new Car())
    ])
  });

  constructor(
    private ownerService: OwnerService,
    private carService: CarService,
    private editOwnerService: EditOwnerService,
    private fb: FormBuilder
  ) {
    this.owner = this.editOwnerService.getOwner;
  }

  ngOnInit(): void {
    if (this.owner) {
      this.profileForm.setValue({
        aLastName: this.owner.aLastName,
        aFirstName: this.owner.aFirstName,
        aMiddleName: this.owner.aMiddleName,
      });
      this.aCars = this.owner.aCars;
    } else {
      this.profileForm.setValue({
        aLastName: '',
        aFirstName: '',
        aMiddleName: '',
      });
      this.aCars = this.carService.getCars;
    }
    for (let i = 1990; i <= 2021; i++) {
      this.arrYearOfProduction.push(i);
    }
  }

  get cars() {
    return this.profileForm.get('cars') as FormArray;
  }

  addCars() {
    this.cars.push(this.fb.control(new Car()));
  }

  deleteCar(event: Event): void {
    console.log((event.target as HTMLElement).parentElement?.id!);
    console.log(this.cars.value);

  }

  // addNewCar(): void {
  //   this.carService.add();
  //   this.aCars = this.carService.getCars;
  // }

  // deleteCar(event: Event): void {
  //   this.carService.delete((event.target as HTMLElement).parentElement?.id!);
  //   this.aCars = this.carService.getCars;
  // }

  saveOwner(): void {
    console.log(this.profileForm.value);

    // this.ownerService.createOwner(this.profileForm.value, this.aFirstName.value, this.aMiddleName.value, this.carService.getCars
    // ).subscribe();
  }

  deleteOwner() {
    this.editOwnerService.delete();
  }
}
