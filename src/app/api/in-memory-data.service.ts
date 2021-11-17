import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OwnerEntity } from '../interface/owner-entity';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const owners: OwnerEntity[] = [
      {
        id: 11,
        aLastName: 'Петров',
        aFirstName: 'Петр',
        aMiddleName: 'Петрович',
        aCars: [
          {
            aCarId: 99,
            stateNumber: 'AX1111HP',
            manufacturerName: 'Toyota',
            modelName: 'Corola',
            yearOfProduction: 2000,
          }
        ],
      },
      {
        id: 12,
        aLastName: 'Иванов',
        aFirstName: 'Иван',
        aMiddleName: 'Иванович',
        aCars: [
          {
            aCarId: 98,
            stateNumber: 'AX2222HP',
            manufacturerName: 'Toyota',
            modelName: 'Corola',
            yearOfProduction: 2000,
          }
        ],
      },
    ];
    return { owners };
  }

  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.id)) + 1 : 11;
  }

}
