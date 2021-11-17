import { CarEntity } from "./car-entity";

export interface OwnerEntity {
    id: number;
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
}

