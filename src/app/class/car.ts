import { CarEntity } from "../interface/car-entity";
import * as cuid from 'cuid';

export class Car {
    aCarId: string;
    stateNumber!: string;
    manufacturerName!: string;
    modelName!: string;
    yearOfProduction!: number;

    constructor() {
        this.aCarId = cuid();
    }
    set setStateNumber(value: string) {
        this.stateNumber = value;
    }
    set setManufacturerName(value: string) {
        this.manufacturerName = value;
    }
    set setModelName(value: string) {
        this.modelName = value;
    }
    set setYearOfProduction(value: number) {
        this.yearOfProduction = value;
    }
}
