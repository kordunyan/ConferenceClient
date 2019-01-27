export class Conference {
    public id: number;
    private title: string;
    private subject: string;
    private emailContent: string;
    private dateCreated: string;

    constructor(id?: number, title?: string, subject?: string, emailContent?: string, dateCreated?: string) {
        this.id = id;
        this.title = title;
        this.subject = subject;
        this.emailContent = emailContent;
        this.dateCreated = dateCreated;
    }
}