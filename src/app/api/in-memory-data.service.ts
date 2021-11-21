import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OwnerEntity } from '../interface/owner-entity';
import * as cuid from 'cuid';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const owners: OwnerEntity[] = [
      {
        id: cuid(),
        aLastName: 'Петров',
        aFirstName: 'Петр',
        aMiddleName: 'Петрович',
        aCars: [
          {
            aCarId: cuid(),
            stateNumber: 'AX1111HP',
            manufacturerName: 'Toyota',
            modelName: 'Corola',
            yearOfProduction: 2000,
          }
        ],
      },
      {
        id: cuid(),
        aLastName: 'Иванов',
        aFirstName: 'Иван',
        aMiddleName: 'Иванович',
        aCars: [
          {
            aCarId: cuid(),
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

  genId(owners: OwnerEntity[]): string {
    return owners.length > 0 ? cuid() : cuid();
  }

}
