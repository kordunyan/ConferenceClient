import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddConferenceDialogComponent } from '../add-conference-dialog/add-conference-dialog.component';
import { ProgressBarService } from 'src/app/service/progress-bar.service';
import { NewConferenceRequest } from 'src/app/dto/new-conference-equest';
import { ConferenceHttpService } from 'src/app/service/http/conference.http.service';
import { Conference } from 'src/app/domain/conference';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent {

  constructor(
    private conferenceHtppService: ConferenceHttpService,
    private progressBarService: ProgressBarService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  openNewConferenceDialog() {
    this.dialog.open(AddConferenceDialogComponent, {
      width: '500px'
    }).beforeClose()
      .subscribe((conference: NewConferenceRequest) => {
      if (conference) {
        this.saveNewConference(conference);
      } 
    });
  }

  saveNewConference(conference: NewConferenceRequest) {
    this.progressBarService.show();
    this.conferenceHtppService.save(conference)
      .subscribe((conference: Conference) => {
        this.progressBarService.hide();
        this.router.navigate(['/conference', conference.id]);
      }, error => this.progressBarService.hide());
  }

}
