import { Guid } from "guid-typescript";
import { CarEntity } from "./car-entity";

export interface OwnerEntity {
    id: string;
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
}

