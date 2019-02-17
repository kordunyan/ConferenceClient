import { Component, OnInit } from '@angular/core';
import { ConferenceHttpService } from 'src/app/service/http/conference.http.service';
import { ProgressBarService } from 'src/app/service/progress-bar.service';
import { Conference } from 'src/app/domain/conference';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent implements OnInit {

  conferences: Conference[] = [];

  constructor(
    private conferenceHttpService: ConferenceHttpService,
    private progressBarService: ProgressBarService
  ) { }

  ngOnInit() {
    this.progressBarService.show();
    this.conferenceHttpService.getAll()
      .subscribe((conferences: Conference[]) => {
        this.progressBarService.hide();
        this.conferences = conferences;
      }, error => this.progressBarService.hide());
  }

}
