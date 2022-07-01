import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import { LoadingOverlayComponent } from './components/loading-overlay/loading.component';

@Injectable({ providedIn: 'root' })
export class LoaderService {

  private spinnerTopRef = this.cdkSpinnerCreate();
    private spinTimeout: any;
    private spin$: Subject<boolean> = new Subject();

    constructor(
        private overlay: Overlay,
    ) {

      this.spin$
        .asObservable()
        .pipe(
          map(val => val ? 1 : -1 ),
          scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
        )
        .subscribe(
          (res) => {
            if (res === 1) {
              this.showSpinner();
            } else if ( res === 0 ) {
              if (this.spinnerTopRef.hasAttached()) {
                this.stopSpinner();
              }
            }
          }
        );
    }

    /** Shows a loader spinner blocking the entire screen */
    show(){
      this.spin$.next(true);
    }
    /** Hides the loader spinner presented by the method show() */
    hide() {
      this.spin$.next(false);
    }

    private cdkSpinnerCreate() {
        return this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            positionStrategy: this.overlay.position()
                 .global()
                 .centerHorizontally()
                 .centerVertically()
        });
    }

    private showSpinner(timeout: number = 60000) {
      if (!this.spinnerTopRef.hasAttached()) {
        this.spinnerTopRef.attach(new ComponentPortal(LoadingOverlayComponent));

        this.spinTimeout = setTimeout(() => {
            this.stopSpinner();
        }, timeout);
      }
    }

    private stopSpinner() {
        if (this.spinnerTopRef.hasAttached()) {
            this.spinnerTopRef.detach();
        }
        clearTimeout(this.spinTimeout);
    }
}
