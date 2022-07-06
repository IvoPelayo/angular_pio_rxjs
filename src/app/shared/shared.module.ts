import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { MarkdownModule } from 'ngx-markdown'
import 'moment/locale/es';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
    MarkdownModule,
  ]
})
export class SharedModule { }
