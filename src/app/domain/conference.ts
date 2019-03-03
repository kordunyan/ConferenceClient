import { EmailTo } from "./email.to";
import { InvitationFile } from "./invitation-file";

export class Conference {
    public id: number;
    public title: string;
    public subject: string;
    public emailContent: string;
    public dateCreated: string;
    public emailSent: boolean;
    public emailsTo: EmailTo[] = [];
    public invitationFiles: InvitationFile[] = [];

    constructor(id?: number, title?: string, subject?: string, emailContent?: string, dateCreated?: string) {
        this.id = id;
        this.title = title;
        this.subject = subject;
        this.emailContent = emailContent;
        this.dateCreated = dateCreated;
    }
}