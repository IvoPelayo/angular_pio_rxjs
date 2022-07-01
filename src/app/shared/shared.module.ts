import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/es';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MomentModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
  ]
})
export class SharedModule { }
