import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { CustomDatepickerComponent } from './custom-datepicker.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { RegularDatepickerComponent } from './regular-datepicker/regular-datepicker.component';
import { YearPickerComponent } from './year-picker/year-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule
  ],
  declarations: [
    CustomDatepickerComponent,
    MonthPickerComponent,
    RegularDatepickerComponent,
    YearPickerComponent
  ],
  exports: [
    CustomDatepickerComponent
  ]
})
export class CustomDatepickerModule { }
