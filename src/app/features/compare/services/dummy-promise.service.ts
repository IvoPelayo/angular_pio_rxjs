import { Injectable } from "@angular/core";
import { Dummy } from "src/app/shared/models/dummy";
import { DummyService } from "src/app/shared/services/dummy/dummy.service";

@Injectable()
export class PromiseDummyManagerService {
    
    dummy: Dummy;
    
    constructor(private service: DummyService){}

    getById(dummyId: number): Promise<Dummy> {
        return new Promise((resolve, reject) => {});
    }

    save(): Promise<Dummy> {
        return new Promise((resolve, reject) => {});
    }

    addChildren() {

    }

    
}