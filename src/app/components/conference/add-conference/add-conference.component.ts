import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddConferenceDialogComponent } from '../add-conference-dialog/add-conference-dialog.component';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent {

  constructor(public dialog: MatDialog) { }

  openNewConferenceDialog() {
    this.dialog.open(AddConferenceDialogComponent, {
      width: '500px'
    })
  }

}
