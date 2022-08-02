import { Component, OnInit } from '@angular/core';
import { Dummy } from 'src/app/shared/models/dummy';
import { DummyService } from 'src/app/shared/services/dummy/dummy.service';
import { PromiseDummyManagerService } from '../../services/dummy-promise.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DummyListComponent implements OnInit {
  data: Dummy[] = [];

  constructor(private service: DummyService,
              public manager: PromiseDummyManagerService) { }

  ngOnInit(): void {
    this.service.search({ page: 1 })
      .toPromise()
      .then(res => this.data = res.data);
  }

  edit(dummy: Dummy) {
    this.manager.getById(dummy.id);
  }


}
