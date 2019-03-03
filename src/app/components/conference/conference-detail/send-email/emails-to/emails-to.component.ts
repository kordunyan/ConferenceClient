import { Component, OnInit, Input } from '@angular/core';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { FileService } from 'src/app/service/file.service';
import { switchMap } from 'rxjs/operators';
import { ArrayUtils } from 'src/app/utils/array.utils';
import { Validators } from '@angular/forms';
import { EmailTo } from 'src/app/domain/email.to';
import { ValidationStatus } from '../send-email.component';

const EMAIL_LIST_EXTENSIONS = ['txt'];

@Component({
  selector: 'app-emails-to',
  templateUrl: './emails-to.component.html',
  styleUrls: ['./emails-to.component.css']
})
export class EmailsToComponent implements OnInit {

  emailsToValidators = [Validators.email];
  @Input() emailsTo: EmailTo[] = [];
  @Input() validationStatus: ValidationStatus;

  constructor(
    private fileUploadService: FileUploadService,
    private fileService: FileService
  ) { }

  ngOnInit() {
  }

  uploadEmailsTo() {
    this.fileService.selectFiles(EMAIL_LIST_EXTENSIONS)
      .pipe(
        switchMap((files: Set<File>) => this.fileUploadService.uploadFile('/parse-emails', files))
      ).subscribe(result => this.fillUploadedEmails(result));
  }

  fillUploadedEmails(emailArrays: string[][]) {
    if (ArrayUtils.isEmpty(emailArrays)) {
      return;
    }
    emailArrays.forEach(emails => {
      if (ArrayUtils.isEmpty(emails)) {
        return;
      }
      emails.forEach(email => {
        if (!this.existsEmail(email)) {
          this.emailsTo.push(new EmailTo(email));
        }
      });
    });
  }

  getValueFunction() {
    return (emailTo: EmailTo) => emailTo.email;
  }

  createOptionFunction() {
    return (email: string) => new EmailTo(email);
  }

  existsEmail(email: string) {
    return this.emailsTo.findIndex((emailTo: EmailTo) => emailTo.email === email) > -1;
  }

}
