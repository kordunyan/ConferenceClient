import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Conference } from 'src/app/domain/conference';
import { ProgressBarService } from 'src/app/service/progress-bar.service';
import { first, switchMap } from 'rxjs/operators';
import { ConferenceHttpService } from 'src/app/service/http/conference.http.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  conference: Conference;

  constructor(
    private conferenceHttpService: ConferenceHttpService,
    private progressBarService: ProgressBarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.progressBarService.show();
    this.route.paramMap
      .pipe(
        first(),
        switchMap((params: ParamMap) => this.conferenceHttpService.getById(parseInt(params.get('id'))))
      ).subscribe((conferenceResult: Conference) => {
        this.progressBarService.hide();
        this.conference = conferenceResult;
        console.log(this.conference);
      }, error => this.progressBarService.hide());
  }

}
