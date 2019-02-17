import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { ArrayUtils } from 'src/app/utils/array.utils';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  emailsTo: string[] = [];
  emailsToValidators = [Validators.email];

  constructor(
    private fileUploadService: FileUploadService
  ) {


  }

  ngOnInit() {
  }

  uploadEmailsTo() {
    this.fileUploadService.uploadFile('/parse-emails', ['txt'])
      .subscribe(result => {
        this.fillUploadedEmails(result); 
      });
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
        if (this.emailsTo.indexOf(email) < 0) {
          this.emailsTo.push(email);
        }
      });
    });

  }

}
