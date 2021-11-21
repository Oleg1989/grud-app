import { Component, OnInit } from '@angular/core';

import { OwnerService } from './service/owner.service';
import { OwnerEntity } from '../interface/owner-entity';
import { EditOwnerService } from '../edit-owner/service/edit-owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: OwnerEntity[] = [];
  owner!: OwnerEntity;
  ownerId!: string;
  disabled: boolean = true;
  ownerTitle: string = '';

  constructor(
    private ownerService: OwnerService,
    private editOwnerService: EditOwnerService
  ) {

  }

  ngOnInit(): void {
    this.getOwners();
    this.ownerId = '';
  }

  getOwners(): void {
    this.ownerService.getOwners()
      .subscribe(owners => {
        this.owners = [...owners]
      });
  }

  getOwner(event: Event) {
    this.editOwnerService.add(this.ownerId);
  }

  unlockButtons(event: Event): void {
    this.ownerId = (event.target as HTMLElement).parentElement?.id!;
    if (this.ownerId) {
      this.disabled = false;
      let owner: OwnerEntity = this.owners.find(owner => owner.id === this.ownerId)!;
      this.ownerTitle = `${owner.aLastName} ${owner.aFirstName} ${owner.aMiddleName}`;
    }
  }

  delete(): void {
    this.owners = this.owners.filter(owner => owner.id !== this.ownerId);
    this.ownerService.deleteOwner(this.ownerId).subscribe();
    this.ownerTitle = '';
  }

}
