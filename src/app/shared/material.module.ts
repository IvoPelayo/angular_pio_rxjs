import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
    imports: [],
    declarations: [
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSnackBarModule,
        FlexLayoutModule,
        MatDatepickerModule,
        MatTableModule,
        MatMomentDateModule,
    ]
})
export class MaterialModule {}
