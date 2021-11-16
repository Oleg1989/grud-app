import { CarEntity } from "./car-entity";

export interface OwnerEntity {
    aOwnerId: number;
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
}

