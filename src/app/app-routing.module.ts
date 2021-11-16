import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { OwnerComponent } from './owner/owner.component';

import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'owners',
    pathMatch: 'full',
  },
  {
    path: 'owners',
    component: OwnersComponent,
  },
  {
    path: 'edit-owner',
    component: EditOwnerComponent,
  },
  {
    path: 'owners/:id',
    component: OwnerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
