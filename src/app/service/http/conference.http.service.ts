import { AbstractHttpService } from "./abstract-http.service";
import { MessageService } from "../message.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conference } from "src/app/domain/conference";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { NewConferenceRequest } from "src/app/dto/new-conference-equest";

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

}