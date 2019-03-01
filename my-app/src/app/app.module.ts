import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule,MatExpansionModule } from '@angular/material';
import { NotesearchbodyComponent } from './notesearchbody/notesearchbody.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MainnoteComponent } from './mainnote/mainnote.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ArchiveNotesComponent } from './archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './trashed-notes/trashed-notes.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NotesearchbodyComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    MainnoteComponent,
    UpdateNoteComponent,
    ArchiveNotesComponent,
    TrashedNotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule

    
  
  ],
  entryComponents: [UpdateNoteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
