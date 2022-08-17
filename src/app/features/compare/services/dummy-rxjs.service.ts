import { catchError, concatMap, map as rxjsMap } from 'rxjs/operators';
import { LoaderService } from './../../../core/services/loader/loader.service';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of, throwError } from "rxjs";
import { Dummy } from "src/app/shared/models/dummy";
import { DummyService } from "src/app/shared/services/dummy/dummy.service";
import { map } from 'lodash';
import { showLoader } from 'src/app/core/pipes/loader.pipe';
import { saveMessages } from 'src/app/core/pipes/messages.pipe';

@Injectable()
export class RxjsDummyManagerService {
    
    dummy: Dummy;
    
    constructor(private service: DummyService,
        private notifications: NotificationService,
        private loader: LoaderService){}

    getById(dummyId: number): Observable<Dummy> {
        return this.service.getById(dummyId).pipe(
            showLoader(this.loader),
            rxjsMap(res => {
                this.dummy =  new Dummy(res);
                return this.dummy;
            }),
            concatMap(dummy => {
                if(dummy.childrenIds.length) {
                    return forkJoin(
                        map(dummy.childrenIds, id => this.service.getById(id))
                    ).pipe(
                        rxjsMap(childrens => {
                            this.dummy.children = map(childrens, c => new Dummy(c));
                            return this.dummy;
                        }),
                    )
                }

                return of(dummy);
            }),
            catchError(error => {
                this.notifications.saveError();
                return throwError(error);
            })
        );
    }

    save(): Observable<Dummy> {
        return this.service.save(this.dummy).pipe(
            showLoader(this.loader),
            saveMessages(this.notifications),
            rxjsMap(res => {
                this.dummy.id =  res.id;
                return this.dummy;
            }),
            concatMap(dummy => {
                if(dummy.children.length) {
                    return forkJoin(
                        map(dummy.children, c => this.service.save(c))
                    ).pipe(
                        rxjsMap(childrens => {
                            this.dummy.children = map(childrens, c => new Dummy(c));
                            return this.dummy;
                        })
                    );
                }

                return of(dummy);
            })
        );
    }

    addChildren() {
        this.dummy.children.push(new Dummy({
            parentId: this.dummy.id,
        }));
    }

    
}