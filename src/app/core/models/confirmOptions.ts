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
        this.message = this.message || 'core.services.notifications.remove-item-title';
        this.acceptButtonText = this.acceptButtonText || 'core.services.notifications.accept-button';
        this.declineButtonText = this.declineButtonText || 'core.services.notifications.decline-button';
    }
}
