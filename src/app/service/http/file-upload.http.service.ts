import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { AbstractHttpService } from './abstract-http.service';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadHttpService extends AbstractHttpService {

  private static readonly BASE_PATH = '/upload';

  constructor(messageService: MessageService, http: HttpClient) {
    super(messageService, http, FileUploadHttpService.BASE_PATH);
  }


  public uploadFiles(path: string, files: Set<File>): { [key: string]: { progress: Observable<number> } } {
    const status: { [key: string]: { progress: Observable<number> } }  = {};
    
    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const request = new HttpRequest('POST', this.relatedUrl(path), formData, {
        reportProgress: true
      });
      const progress = new Subject<number>();
      this.http.request(request)
        .pipe(
          catchError(this.handleTrowableError(`Failed to upload file [${file.name}]`))
        )
        .subscribe((event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            progress.next(percentDone);
          } else if (event instanceof HttpResponse) {
            progress.next(event.body);
            progress.complete();
          }
        }, error => progress.error(error));
        status[file.name] = {
          progress: progress.asObservable()
        };
    });
    
    return status;
  }


}
