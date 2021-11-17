import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../owner.service';
import { OwnerEntity } from '../interface/owner-entity';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: OwnerEntity[] = [];
  ownerId: string = '';
  disabled: boolean = true;
  owner: string = '';

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners()
      .subscribe(owners => this.owners = [...owners]);
  }

  unlockButtons(event: Event): void {
    this.ownerId = (event.target as HTMLElement).parentElement?.id!;
    if (this.ownerId) {
      this.disabled = false;
      let owner: OwnerEntity = this.owners.find(owner => owner.id === +this.ownerId)!;
      this.owner = `${owner.aLastName} ${owner.aFirstName} ${owner.aMiddleName}`;
    }
  }

  delete(): void {
    this.owners = this.owners.filter(owner => owner.id !== +this.ownerId);
    this.ownerService.deleteOwner(+this.ownerId).subscribe();
    this.owner = '';
  }

}
