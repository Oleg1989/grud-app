import { Observable } from "rxjs";
import { CarEntity } from "./car-entity";
import { OwnerEntity } from "./owner-entity";

export interface ICarOwnersService {
    getOwners(): Observable<OwnerEntity[]>;
    getOwnerById(aId: string): Observable<OwnerEntity>;
    createOwner(
        aLastName: string,
        aFirstName: string,
        aMiddleName: string,
        aCars: CarEntity[]
    ): Observable<OwnerEntity>;
    editOwner(aOwner: OwnerEntity): Observable<null | OwnerEntity>;
    deleteOwner(aOwnerId: string): Observable<OwnerEntity[]>;

}
