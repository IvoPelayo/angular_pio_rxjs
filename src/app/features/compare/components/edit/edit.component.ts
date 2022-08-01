import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Dummy } from 'src/app/shared/models/dummy';

@Component({
  selector: 'app-dummy-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditDummyComponent implements OnInit {
  today = moment.utc();
  isEdit: boolean;
  form: FormGroup;

  @Input() dummy: Dummy;
  @Output() dummyChange: EventEmitter<Dummy> = new EventEmitter<Dummy>();

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
      birthDate: new FormControl(null, [ Validators.required ]),
      parentId: new FormControl(0),
      children: new FormControl(0),
    });
  }

  save() {
      this.dummyChange.emit(
        new Dummy(this.form.getRawValue())
      );
  }

}
