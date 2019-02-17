import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileProgressDialogComponent } from '../shared/components/dialog/upload-file-progress-dialog/upload-file-progress-dialog.component';
import { Observable, AsyncSubject } from 'rxjs';
import { FileUploadHttpService } from './http/file-upload.http.service';
import { MessageService } from './message.service';
import { FileUtils } from '../utils/file.utils';
import { ArrayUtils } from '../utils/array.utils';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private fileUploadHttpService: FileUploadHttpService,
    private messageService: MessageService,
    private dialog: MatDialog
  ) { 
    this.createFileInput();
  }

  public uploadFile(urlPath, allowedExtensions: string[] = []): Observable<any> {
    const resultSubject = new AsyncSubject();
    const $fileInput = this.createFileInput();
    $fileInput.on('change', _ => {
      const files = this.getSelectedFiles($fileInput);
      if (!files.size) {
        $fileInput.remove();
        resultSubject.complete();
        return;
      }
      if (!this.validateExtensions(files, allowedExtensions)) {
        $fileInput.remove();
        this.messageService.error('Invalid extension for file');
        resultSubject.error('Invalid extension for file');  
        return;
      }
      this.uploadFilesToServer(urlPath, files).subscribe(result => {
        if (result) {
          resultSubject.next(result);
        }
        resultSubject.complete();
        $fileInput.remove();
      }, error => {
        $fileInput.remove();
        resultSubject.error(error);
      });
    });

    $fileInput.click();
    return resultSubject.asObservable();
  }

  private validateExtensions(files: Set<File>, allowedExtensions: string[]): boolean {
    if (ArrayUtils.isEmpty(allowedExtensions)) {
      return false;
    }
    var result = true;
    files.forEach(file =>  {
      const extension = FileUtils.getExtension(file.name);
      if (allowedExtensions.indexOf(extension) < 0) {
        result = false;
      }
    });
    return result;
  }

  private uploadFilesToServer(urlPath: string, files: Set<File>): Observable<any> {
    return this.dialog.open(UploadFileProgressDialogComponent, {
      width: '500px',
      data: {
        files: files,
        progress: this.fileUploadHttpService.uploadFiles(urlPath, files)
      }
    }).beforeClose();
  }

  private getSelectedFiles($element): Set<File> {
    const files: {[key: string]: File}  = $element[0].files;
    const result: Set<File> = new Set();
    if (!files || !files.length) {
      return result;
    }
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        result.add(files[key]);
      }
    }
    return result;
  }

  private createFileInput() {
    const $fileInput = $("<input />").attr({
        type: 'file',
        multiple: ''
      }).addClass('d-none');
    $('body').append($fileInput);
    return $fileInput;
  }
}
