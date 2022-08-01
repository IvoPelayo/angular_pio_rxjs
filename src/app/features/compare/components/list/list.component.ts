import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
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
              public manager: PromiseDummyManagerService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.service.search({ page: 1 })
      .toPromise()
      .then(res => this.data = res.data)
      .finally(() => this.loader.hide());
  }

  edit(dummy: Dummy) {
    this.loader.show();

    this.manager.getById(dummy.id)
      .finally(() => this.loader.hide());
  }

  save() {
    this.loader.show();
    
    this.manager.save()
      .finally(() => this.loader.hide());
  }

}
