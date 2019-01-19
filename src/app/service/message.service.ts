import { ToastrManager } from "ng6-toastr-notifications";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    private static TOASTR_CONFIG = {
        showCloseButton: true,
        animate: 'slideFromTop'    
    };

    constructor(public toastr: ToastrManager) {  
    }

    success(message: string, title: string = null) {
        this.toastr.successToastr(message, title, MessageService.TOASTR_CONFIG);
    }

    info(message: string, title: string = null) {
        this.toastr.infoToastr(message, title, MessageService.TOASTR_CONFIG);
    }

    error(message: string, title: string = null) {
        this.toastr.errorToastr(message, title, MessageService.TOASTR_CONFIG);
    }

    warning(message: string, title: string = null) {
        this.toastr.warningToastr(message, title, MessageService.TOASTR_CONFIG);
    }
}