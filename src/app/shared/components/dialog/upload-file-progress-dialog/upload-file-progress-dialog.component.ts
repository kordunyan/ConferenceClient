import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-upload-file-progress-dialog',
  templateUrl: './upload-file-progress-dialog.component.html',
  styleUrls: ['./upload-file-progress-dialog.component.css']
})
export class UploadFileProgressDialogComponent {

  files: Set<File> = new Set();
  isLoaded = false;
  progress;
  hasError = false;
  uploadingResult: any;

  constructor(
    public dialogRef: MatDialogRef<UploadFileProgressDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data: any) { 
      this.progress = data.progress;
      this.files = data.files;
      this.processProgress();
  }

  private processProgress() {
    const progressObservables = [];
    for (let key in this.progress) {
      progressObservables.push(this.progress[key].progress);
    }
    forkJoin(progressObservables).subscribe(end => {
      this.isLoaded = true;
      this.uploadingResult = end;
      this.confirmUpload();
    }, error => {
      this.isLoaded = true;
      this.hasError = true;
    });
  }

  confirmUpload() {
    this.dialogRef.close(this.uploadingResult);  
  }

  onCancel() {
    this.dialogRef.close();
  }

}
