import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatButtonModule,MatRippleModule,MatSelectModule,MatInputModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from'@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
   MatIconModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule

  ]
})
export class AppMaterialModule { }
