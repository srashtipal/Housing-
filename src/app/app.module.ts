
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';


const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'**',component:PropertyListComponent},


]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
  PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     RouterModule.forRoot(appRoutes),
     FormsModule,
     ReactiveFormsModule,
  ],
  providers: [ HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
