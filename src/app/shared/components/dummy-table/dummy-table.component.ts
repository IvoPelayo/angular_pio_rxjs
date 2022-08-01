import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dummy } from '../../models/dummy';

@Component({
  selector: 'app-dummy-table',
  templateUrl: './dummy-table.component.html',
  styleUrls: ['./dummy-table.component.scss']
})
export class DummyTableComponent {
  columns: string[] = [ 'name', 'lastName', 'birthDate'];

  @Input() source: Dummy[];
  @Input() editable: boolean;

  @Output() rowClick: EventEmitter<any> = new EventEmitter<Dummy>();

}
