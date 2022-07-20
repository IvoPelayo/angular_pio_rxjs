import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/es';
import { DummyService } from './services/dummy/dummy.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DummyService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
  ]
})
export class SharedModule { }
