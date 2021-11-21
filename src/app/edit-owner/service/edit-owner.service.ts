import { Injectable } from '@angular/core';
import { OwnerEntity } from 'src/app/interface/owner-entity';
import { OwnerService } from 'src/app/owners/service/owner.service';

@Injectable({
  providedIn: 'root'
})
export class EditOwnerService {

  private owner!: OwnerEntity | undefined;

  constructor(private ownerService: OwnerService) { }

  get getOwner() {
    return this.owner;
  }

  add(id: string) {
    this.ownerService.getOwnerById(id)
      .subscribe(newOwner => {
        this.owner = { ...newOwner };
      });
  }

  delete() {
    this.owner = undefined;
  }
}
