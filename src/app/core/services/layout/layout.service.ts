import { Injectable } from '@angular/core';
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
    onOrientationChange: Subject<any> = new Subject();

    constructor(
        private mediaObserver: MediaObserver,
        private breakpointObserver: BreakpointObserver,
    ) {
        // MOBILE LAYOUT
        mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
            this.isMobile = filter(changes, (c) => c.mqAlias === 'lt-md').length > 0;
            this.onLayoutChange.next();
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

    get currentLayout(): string {
        return !this.isMobile ? 'Desktop' : this.isLandscape ? 'Mobile landscape' : 'Mobile portrait'
    }
}
