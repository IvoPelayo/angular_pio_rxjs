import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class PageService {
  constructor(private router: Router, private loader: LoaderService) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loader.show();
          break;
        }
        case event instanceof NavigationEnd: 
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
            this.loader.hide();
            break;
        }
      }
    });
  }
}
