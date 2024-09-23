
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Route,Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/Property-Card/Property-Card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';


const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:AddPropertyComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},

]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
  PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     RouterModule.forRoot(appRoutes),
  ],
  providers: [ HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
