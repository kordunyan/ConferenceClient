import { AbstractHttpService } from "./abstract-http.service";
import { MessageService } from "../message.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conference } from "src/app/domain/conference";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
})
export class ConferenceHttpService extends AbstractHttpService {

    private static readonly BASE_PATH = '/conference';

    constructor(messageService: MessageService, http: HttpClient) {
        super(messageService, http, ConferenceHttpService.BASE_PATH);
    }

    public getBySubject(subject: string): Observable<Conference> {
        const options = this.getHttpOptions();
        options['params'] = new HttpParams().set('subject', subject);
        return this.http.get<Conference>(this.relatedUrl('/subject'), options).pipe(
            catchError(this.handleError(`Failed to find conference by subject: ${subject}`, null))
        ); 
    }

}