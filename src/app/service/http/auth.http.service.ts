import { AbstractHttpService } from "./abstract-http.service";
import { Injectable } from "@angular/core";
import { MessageService } from "../message.service";
import { HttpClient } from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import { Observable } from "rxjs";
import { User } from "src/app/domain/user";

@Injectable({
    providedIn: 'root',
})
export class AuthHttpService extends AbstractHttpService {
    
    private static readonly BASE_PATH = '/auth';
    
    constructor(messageService: MessageService, http: HttpClient) {
        super(messageService, http, AuthHttpService.BASE_PATH);
    }

    public getUserPrincipal(): Observable<User> {
        return this.http.get<User>(this.relatedUrl('/user-principal'), this.getHttpOptions())
            .pipe(
                catchError(this.handleTrowableError('Failed to sign in'))
            );
    }

}