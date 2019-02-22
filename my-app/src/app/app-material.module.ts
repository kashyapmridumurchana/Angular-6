import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatButtonModule,MatRippleModule,MatSelectModule,MatInputModule, MatToolbarModule, MatMenuModule,MatSidenavModule, MatListModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatExpansionModule
 } from '@angular/material';
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
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
   MatListModule,
   MatDividerModule,
   MatTooltipModule,
   MatNativeDateModule,
   MatExpansionModule
   
   
    
 
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
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
   MatListModule,
   MatDividerModule,
   MatTooltipModule,
   MatNativeDateModule,
   MatExpansionModule
  ]
})
export class AppMaterialModule { }
