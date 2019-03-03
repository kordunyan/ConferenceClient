import { Component, Input, Output, EventEmitter } from '@angular/core';

const MAX_FILE_NAME_SIZE = 20;
const TRIMMED_FILE_NAME_SUFFIX = '...';

@Component({
  selector: 'app-invite-file',
  templateUrl: './invite-file.component.html',
  styleUrls: ['./invite-file.component.css']
})
export class InviteFileComponent {

  @Input() file: File;
  @Output('deleteFile') deleteFileEmiter = new EventEmitter<File>();

  constructor() { }


  deleteFileClicked(file: File) {
    this.deleteFileEmiter.emit(file);
  }

}
