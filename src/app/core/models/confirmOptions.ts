import { Constructable } from "./constructable";

export interface IConfirmOptions {
    message: string;
    title?: string;
    acceptButtonText?: string;
    declineButtonText?: string;
    width?: any;
}

export class ConfirmOptions extends Constructable implements IConfirmOptions {
    message: string;
    title?: string;
    acceptButtonText?: string;
    declineButtonText?: string;
    width?: any;

    constructor(obj?) {
        super(obj);
        this.setDefaults();
    }

    private setDefaults() {
        this.message = this.message || '¿Está seguro que desea eliminar este registro?';
        this.acceptButtonText = this.acceptButtonText || 'Si';
        this.declineButtonText = this.declineButtonText || 'No';
    }
}
