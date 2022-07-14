import { map } from "lodash";
import * as moment from 'moment';
import { Constructable } from "src/app/core/models/constructable";

export class Dummy extends Constructable {
    id: number;
    parentId?: number;
    name: string;
    lastName: string;
    birthDate: moment.Moment;
    children: Dummy[];

    get age(): number {
        return moment.utc().diff(this.birthDate, 'years');
    }

    constructor(data?) {
        super(data);
        this.customMap(data);
    }

    private customMap(data) {
        this.birthDate = moment.utc(data?.birthDate, 'DD/MM/YYYY');
        this.children = map(data?.children || [], c => new Dummy(c));
    }
}