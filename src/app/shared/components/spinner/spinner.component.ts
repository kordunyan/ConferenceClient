import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/service/progress-bar.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

}
