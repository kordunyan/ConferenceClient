import { Component, Input, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Conference } from 'src/app/domain/conference';
import { SendConferenceEmailDto } from 'src/app/dto/send-conference-email.dto';
import { ConferenceHttpService } from 'src/app/service/http/conference.http.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  
  editor = ClassicEditor;
  @Input() conference: Conference;
  invitationFiles: Set<File> = new Set();
  validationStatus = new ValidationStatus();

  constructor(
    private conferenceHttpService: ConferenceHttpService
  ) {
  }

  ngOnInit() {
    if (!this.conference.emailContent) {
      this.conference.emailContent = '';
    }
  }

  sendEmail() {
    // if (this.validate()) {
    //   return;
    // }
    this.conferenceHttpService.sendConferenceEmail(SendConferenceEmailDto.build(this.conference, this.invitationFiles))
      .subscribe(result => {
        console.log(result);
      }, error => console.log(error));
  }

  validate() {
    const status = this.validationStatus; 
    status.invalidEmailsTo = !this.conference.emailsTo.length;
    status.invalidSubject = !this.conference.subject.length;
    status.invalidEmailContent = !this.conference.emailContent.length;
    status.invalidInvitationFile = !this.invitationFiles.size;

    return status.invalidEmailsTo || status.invalidSubject || status.invalidEmailContent || status.invalidInvitationFile;
  }

}

export class ValidationStatus {
  public invalidEmailsTo = false;
  public invalidSubject = false;
  public invalidEmailContent = false;
  public invalidInvitationFile = false;
}