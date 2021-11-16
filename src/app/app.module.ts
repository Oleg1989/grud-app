import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerComponent } from './owner/owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerComponent,
    EditOwnerComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
