import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAkkComponent} from './my-akk.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    MyAkkComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class MyAkkModule {
}
