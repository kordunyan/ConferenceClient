import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ProgressBarService {
    public isShown = false;

    show() {
        this.isShown = true;
    }

    hide() {
        this.isShown = false;
    }

}