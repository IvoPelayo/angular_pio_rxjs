import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/shared/services/dummy/dummy.service';

@Component({
  selector: 'app-core-tools',
  templateUrl: './core-tools.component.html',
  styleUrls: ['./core-tools.component.scss']
})
export class CoreToolsComponent implements OnInit {

  constructor(private dummyService: DummyService) { }

  ngOnInit(): void {
  }

  callWithError() {
    this.dummyService.getById(10).subscribe(dummy => {
      // Do something
    });
  }

}
