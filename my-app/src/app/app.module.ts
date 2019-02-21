import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatSidenavContainer, MatSidenavModule } from '@angular/material';
import { NotesearchbodyComponent } from './notesearchbody/notesearchbody.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NotesearchbodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
