import { Component, OnDestroy } from '@angular/core';
import { SubSink } from "subsink";

@Component({
    template: ''
})
export abstract class SubscriptionComponent implements OnDestroy {
    subs: SubSink = new SubSink();

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
