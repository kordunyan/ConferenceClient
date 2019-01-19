import { HttpHeaders, HttpClient } from "@angular/common/http";

import { MessageService } from "../message.service";
import { AppProperties } from "src/app/domain/app.properties";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AbstractHttpService {
    protected HEADERS = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    constructor(
        protected messageService: MessageService,
        protected http: HttpClient,
        protected readonly basePath: string
        ) {
    }

    public getUrl(uri?: string) {
        return uri ? `${AppProperties.API_BASE_URL}${uri}` : AppProperties.API_BASE_URL;
    }

    public relatedUrl(uri?: string) {
        let relatedUri = uri ? `${this.basePath}${uri}` : this.basePath;
        return this.getUrl(relatedUri);
    }

    public getHeaders() {
        return this.HEADERS;
    }
    
    public getHttpOptions() {
        return {
          headers: this.HEADERS
        };
    }

    protected handleError<T>(errorMesage = 'Error', result?: T) {
        return (error: any): Observable<T> => {
          this.messageService.error(errorMesage);
          console.error(errorMesage, error);
          return of(result as T);
        };
    }
    
    protected handleTrowableError(errorMesage = 'Error', failedValues?: any) {
        return (error: any) => {
          this.messageService.error(errorMesage);
          console.error(errorMesage, error);
          if (failedValues) {
            console.error(failedValues);
          }
          throw errorMesage;
        };
    }

}