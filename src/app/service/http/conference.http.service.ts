import { AbstractHttpService } from "./abstract-http.service";
import { MessageService } from "../message.service";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conference } from "src/app/domain/conference";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { NewConferenceRequest } from "src/app/dto/new-conference-equest";
import { SendConferenceEmailDto } from "src/app/dto/send-conference-email.dto";
import { EmailTo } from "src/app/domain/email.to";

@Injectable({
    providedIn: 'root',
})
export class ConferenceHttpService extends AbstractHttpService {

    private static readonly BASE_PATH = '/conference';

    constructor(messageService: MessageService, http: HttpClient) {
        super(messageService, http, ConferenceHttpService.BASE_PATH);
    }

    public save(conference: NewConferenceRequest): Observable<Conference> {
        return this.http.post<Conference>(this.relatedUrl(''), conference, this.getHttpOptions())
            .pipe(
                catchError(this.handleTrowableError('Failed to save new conference', conference))
            );
    }

    public existsBySubkect(subject: string): Observable<Boolean> {
        const options = this.getHttpOptions();
        options['params'] = new HttpParams().set('subject', subject);
        return this.http.get<Boolean>(this.relatedUrl('/exists'), options).pipe(
            catchError(this.handleError(`Failed to find conference by subject: ${subject}`, false))
        ); 
    }

    public getAll(): Observable<Conference[]> {
        return this.http.get<Conference[]>(this.relatedUrl('/all'), this.getHttpOptions())
            .pipe(
                catchError(this.handleError('Failed to get all conferences', []))
            );
    }

    public getById(id: number): Observable<Conference> {
        return this.http.get<Conference>(this.relatedUrl(`/id/${id}`), this.getHttpOptions())
            .pipe(
                catchError(this.handleError(`Failed to load conference with id: ${id}`, null))
            );
    }

    public sendConferenceEmail(sendConferenceEmailDto: SendConferenceEmailDto): Observable<any> {
        const formData = new FormData();
        sendConferenceEmailDto.invitationFiles.forEach(file => {
            formData.append('inviteFiles', file, file.name);    
        });
        formData.append('emailContent', sendConferenceEmailDto.emailContent);
        formData.append('subject', sendConferenceEmailDto.subject);
        formData.append('id', sendConferenceEmailDto.id.toString());
        sendConferenceEmailDto.emailsTo.forEach((emailTo: EmailTo) => {
            formData.append('emailsTo', emailTo.email);
        });
        const request = new HttpRequest('POST', this.relatedUrl('/send-email'), formData, {reportProgress: true});

        return this.http.request(request)
            .pipe(
                catchError(this.handleTrowableError('Failed to send email', sendConferenceEmailDto))
             );
    }

}