import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';
import { ArrayUtils } from '../utils/array.utils';
import { FileUtils } from '../utils/file.utils';
import { MessageService } from './message.service';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private messageService: MessageService
  ) { }

  public selectFiles(allowedExtensions: string[] = []): Observable<any> {
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
        this.messageService.error('Invalid extension for file. Allowed extensions: ' + allowedExtensions.join(','));
        resultSubject.error('Invalid extension for file');  
        return;
      }
      resultSubject.next(files);
      $fileInput.remove();
      resultSubject.complete();
    });
    
    $fileInput.click();
    return resultSubject.asObservable();
  }

  private validateExtensions(files: Set<File>, allowedExtensions: string[]): boolean {
    if (ArrayUtils.isEmpty(allowedExtensions)) {
      return true;
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

  public createFileInput() {
    const $fileInput = $("<input />").attr({
        type: 'file',
        multiple: ''
      }).addClass('d-none');
    $('body').append($fileInput);
    return $fileInput;
  }

}
