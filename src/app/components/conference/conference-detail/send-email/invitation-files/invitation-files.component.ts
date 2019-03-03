import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { ValidationStatus } from '../send-email.component';

const INVITE_FILE_EXTENSIONS = ['doc', 'docx'];

@Component({
  selector: 'app-invitation-files',
  templateUrl: './invitation-files.component.html',
  styleUrls: ['./invitation-files.component.css']
})
export class InvitationFilesComponent implements OnInit {

  @Input() invitationFiles: Set<File> = new Set();
  @Input() validationStatus: ValidationStatus;

  inviteFileNames: Set<string> = new Set();

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
  }

  chooseInviteFile() {
    this.fileService.selectFiles(INVITE_FILE_EXTENSIONS).subscribe((selectedFiles: Set<File>) => {
      selectedFiles.forEach(file => this.addFile(file));
    });
  }

  private addFile(file: File) {
    if (this.inviteFileNames.has(file.name)) {
      return;
    }
    this.inviteFileNames.add(file.name);
    this.invitationFiles.add(file)
  }

  private deleteFile(file: File) {
    this.inviteFileNames.delete(file.name);
    this.invitationFiles.delete(file);
  }

}
