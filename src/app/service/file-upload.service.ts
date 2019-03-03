import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileProgressDialogComponent } from '../shared/components/dialog/upload-file-progress-dialog/upload-file-progress-dialog.component';
import { Observable } from 'rxjs';
import { FileUploadHttpService } from './http/file-upload.http.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private fileUploadHttpService: FileUploadHttpService,
    private dialog: MatDialog
  ) { 
  }

  public uploadFile(urlPath, files: Set<File>): Observable<any> {
    return this.uploadFilesToServer(urlPath, files);
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
}
