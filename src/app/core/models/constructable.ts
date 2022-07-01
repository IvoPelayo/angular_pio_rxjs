export abstract class Constructable {

    constructor(objectToMap?: any){
      this.mapFromRequest(objectToMap);
    }

    private mapFromRequest(request: any): void {
        Object.assign(this, request || {});
    }
  }
