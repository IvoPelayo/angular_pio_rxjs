import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavData, navItems } from 'src/app/_nav';
import { PageService } from '../../services/page/page.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  providers: [ PageService ]
})
export class AppLayoutComponent {
  navItems: NavData[] = navItems;

  constructor(private router: Router){}

  itemClicked(item: NavData) {
    if(item.url) {
      this.router.navigateByUrl(item.url);
    } else {
      item.expanded = item.expanded? false : true;
    }
  }
}
