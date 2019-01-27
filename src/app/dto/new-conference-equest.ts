export class NewConferenceRequest {
    public title: string;
    public subject: string;

    constructor(title, subject) {
        this.title = title;
        this.subject = subject;
    }
}