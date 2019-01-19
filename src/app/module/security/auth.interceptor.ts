import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private static readonly TOKEN_HEADER_KEY = 'Authorization';
    private static readonly BEARER = "Bearer ";

    constructor(private tokenStorageService: TokenStorageService) {

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.tokenStorageService.getToken();
        if (token != null) {
            authReq = req.clone({
                headers: req.headers.set(AuthInterceptor.TOKEN_HEADER_KEY, this.buildTokenValue(token))
            });
        }
        return next.handle(authReq);
    }

    private buildTokenValue(token): string {
        return AuthInterceptor.BEARER + token;
    }
}


export const httpInterceptorProviders = [
    { 
        provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptor, 
        multi: true 
    }
];