import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewConferenceRequest } from 'src/app/dto/new-conference-equest';

@Component({
  selector: 'app-add-conference-dialog',
  templateUrl: './add-conference-dialog.component.html',
  styleUrls: ['./add-conference-dialog.component.css']
})
export class AddConferenceDialogComponent {
  newConference = new NewConferenceRequest('', '');

  constructor(
    public dialogRef: MatDialogRef<AddConferenceDialogComponent>) {  
  }

  onCancel() {
    this.dialogRef.close();  
  }
  
  addConference() {
    console.log(this.newConference);
  }

}
