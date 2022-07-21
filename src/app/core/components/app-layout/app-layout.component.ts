import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from 'lodash';
import { NavData, navItems } from 'src/app/_nav';
import { PageService } from '../../services/page/page.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: [ './app-layout.component.scss' ],
  providers: [ PageService ]
})
export class AppLayoutComponent {
  navItems: NavData[] = navItems;

  constructor(private router: Router, private page: PageService){}

  itemClicked(item: NavData) {
    if(item.url) {
      this.router.navigateByUrl(item.url);
    } else {
      item.expanded = item.expanded? false : true;
      forEach(navItems, i => i.expanded = i == item);
    }
  }

  selected(item: NavData): boolean {
    return item.url && ('/' + item.url) == this.router.url;
  }

  expanded(item: NavData): boolean {
    return item.children && (item.expanded || !!item.children.find(c => this.selected(c)));
  }
}
