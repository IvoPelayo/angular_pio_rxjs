import { LoaderService } from './../../../core/services/loader/loader.service';
import { NotificationService } from 'src/app/core/services/notifications/notification.service';
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of, throwError } from "rxjs";
import { Dummy } from "src/app/shared/models/dummy";
import { DummyService } from "src/app/shared/services/dummy/dummy.service";
import { showLoader } from 'src/app/core/pipes/loader.pipe';
import { saveMessages } from 'src/app/core/pipes/messages.pipe';
import { catchError, concatMap, map as rxjsMap} from 'rxjs/operators';
import { map } from 'lodash';

@Injectable()
export class RxjsDummyManagerService {
    
    dummy: Dummy;
    
    constructor(private service: DummyService,
        private notifications: NotificationService,
        private loader: LoaderService){}

    getById(dummyId: number): Observable<Dummy> {
        return this.getMapped(dummyId).pipe(
            showLoader(this.loader),
            rxjsMap(res => {
                this.dummy = res;
                return this.dummy;
            }),
            concatMap(() => {
                if(this.dummy.childrenIds?.length) {
                    return forkJoin(
                        map(this.dummy.childrenIds, id => this.getMapped(id))
                    ).pipe(
                        rxjsMap(children => {
                            this.dummy.children = children;
                            return this.dummy;
                        })
                    );
                } else {
                    return of(this.dummy);
                }
            }),
            catchError(error => {
                this.notifications.serverError();
                return throwError(error);
            })
        );
    }

    save(): Observable<Dummy> {
        return this.saveMapped(this.dummy).pipe(
            showLoader(this.loader),
            saveMessages(this.notifications),
            concatMap(() => {
                if(this.dummy.children?.length) {
                    return forkJoin(
                        map(this.dummy.children, c => this.saveMapped(c))
                    ).pipe(
                        rxjsMap(() => {
                            return this.dummy;
                        })
                    );
                } else {
                   return of(this.dummy);
                }
            })
        );
    }

    addChildren() {
        this.dummy.children.push(new Dummy({
            parentId: this.dummy.id,
        }));
    }

    private getMapped(dummyId) {
        return this.service.getById(dummyId).pipe(
            rxjsMap(res => new Dummy(res)),
        );
    }

    private saveMapped(dummy: Dummy) {
        return this.service.save(dummy).pipe(
            rxjsMap(res => {
                dummy.id = res.id;
                return dummy;
            }),
        );
    }

    
}