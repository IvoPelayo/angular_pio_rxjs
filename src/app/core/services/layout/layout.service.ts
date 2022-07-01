import { Injectable, RendererFactory2 } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { filter } from 'lodash';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
    isMobile: boolean = false;
    isLandscape: boolean = false;
    isPortrait: boolean = false;
    onLayoutChange: Subject<any> = new Subject();

    constructor(
        private mediaObserver: MediaObserver,
        private breakpointObserver: BreakpointObserver,
        private rendererFactory: RendererFactory2,
    ) {
        // MOBILE LAYOUT
        mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
            this.isMobile = filter(changes, (c) => c.mqAlias === 'lt-md').length > 0;
        });

        breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
        ]).subscribe(result => {
            this.isLandscape = result.matches;
            this.onLayoutChange.next();
        });

        breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
        ]).subscribe(result => {
            this.isPortrait = result.matches;
            this.onLayoutChange.next();
        });
    }
}
