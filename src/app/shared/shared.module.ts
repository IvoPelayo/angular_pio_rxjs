import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/es';
import { DummyService } from './services/dummy/dummy.service';
import { DummyTableComponent } from './components/dummy-table/dummy-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    DummyTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatMomentDateModule,
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
    DummyTableComponent,
  ]
})
export class SharedModule { }
