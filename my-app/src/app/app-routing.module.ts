
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NotesearchbodyComponent } from './notesearchbody/notesearchbody.component';

const appRoutes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component:HomeComponent ,
  children: [
    { path: '', redirectTo: 'notesearchbody', pathMatch: 'full' },
    { path: 'notesearchbody', component: NotesearchbodyComponent },
  ]

},
  { path: '**', redirectTo: 'login' , pathMatch: 'full'}
 ];
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

