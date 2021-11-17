import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { OwnerComponent } from './owner/owner.component';

import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api/owners',
    pathMatch: 'full',
  },
  {
    path: 'api/owners',
    component: OwnersComponent,
  },
  {
    path: 'api/edit-owner',
    component: EditOwnerComponent,
  },
  {
    path: 'api/owners/:id',
    component: OwnerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
