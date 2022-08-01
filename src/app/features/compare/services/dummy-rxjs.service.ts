import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dummy } from "src/app/shared/models/dummy";
import { DummyService } from "src/app/shared/services/dummy/dummy.service";

@Injectable()
export class RxjsDummyManagerService {
    
    dummy: Dummy;
    
    constructor(private service: DummyService){}

    getById(dummyId: number): Observable<Dummy> {
        return this.service.getById(dummyId);
    }

    save(): Observable<Dummy> {
        return this.service.save(this.dummy);
    }

    addChildren() {

    }

    
}