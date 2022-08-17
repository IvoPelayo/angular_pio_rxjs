import { Injectable } from "@angular/core";
import { forEach, map } from "lodash";
import { LoaderService } from "src/app/core/services/loader/loader.service";
import { NotificationService } from "src/app/core/services/notifications/notification.service";
import { Dummy } from "src/app/shared/models/dummy";
import { DummyService } from "src/app/shared/services/dummy/dummy.service";

@Injectable()
export class PromiseDummyManagerService {
    
    dummy: Dummy;
    
    constructor(private service: DummyService,
                private notifications: NotificationService,
                private loader: LoaderService){}


    getById(dummyId: number): Promise<Dummy> {
        this.loader.show();
        return new Promise((resolve, reject) => {
            this.service.getById(dummyId)
            .toPromise()
            .then(result => {
                this.dummy = new Dummy(result);
                if(result.childrenIds?.length > 0) {

                    Promise.all(
                        map(result.childrenIds, id => this.service.getById(id)
                            .toPromise())
                        )
                        .then(children => {
                            this.dummy.children = map(children, c => new Dummy(c));
                            resolve(this.dummy);
                        })
                        .catch(() => {
                            this.notifications.serverError();
                            resolve(this.dummy);
                        });

                } else {
                    resolve(this.dummy);
                }
            })
            .catch(() => {
                this.notifications.serverError();
                reject();
            })
            .finally(() => this.loader.hide());
        });
    }

    save(): Promise<Dummy> {
        this.loader.show();
        return new Promise((resolve, reject) => {
            this.service.save(this.dummy)
            .toPromise()
            .then(result => {
                this.dummy.id = result.id;
                if(this.dummy.children?.length > 0) {
                    forEach(this.dummy.children, c => c.parentId = this.dummy.id);
                    Promise.all(
                        map(result.children, c => this.service.save(c)
                            .toPromise()))
                        .then(children => {
                            forEach(this.dummy.children, (c, index) => c.id = children[index]?.id);
                            this.dummy.childrenIds = map(this.dummy.children, c => c.id);
                            this.notifications.saveSuccess();
                            resolve(this.dummy);
                        })
                        .catch(() => {
                            this.notifications.saveError();
                            reject();
                        });

                } else {
                    this.notifications.saveSuccess();
                    resolve(this.dummy);
                }
            })
            .catch(() => reject(this.notifications.saveError()))
            .finally(() => this.loader.hide());
        });
    }

    addChildren() {
        this.dummy.children.push(new Dummy({
            parentId: this.dummy.id,
        }));
    }

    
}