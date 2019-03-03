import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenceRoutingModule } from './conference-routing.module';
import { ConferenceRootComponent } from './conference-root/conference-root.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { AddConferenceDialogComponent } from './add-conference-dialog/add-conference-dialog.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectivesModule } from 'src/app/shared/directive/custom-directives.module';
import { DetailPageComponent } from './conference-detail/detail-page/detail-page.component';
import { SendEmailComponent } from './conference-detail/send-email/send-email.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EmailsToComponent } from './conference-detail/send-email/emails-to/emails-to.component';
import { InvitationFilesComponent } from './conference-detail/send-email/invitation-files/invitation-files.component';
import { InviteFileComponent } from './conference-detail/send-email/invite-file/invite-file.component';


@NgModule({
  declarations: [
    ConferenceRootComponent, 
    ConferenceListComponent, 
    AddConferenceComponent, 
    AddConferenceDialogComponent, 
    DetailPageComponent, 
    SendEmailComponent, InviteFileComponent, EmailsToComponent, InvitationFilesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    CustomDirectivesModule,
    ConferenceRoutingModule,
    MaterialModule,
    SharedComponentsModule
  ],
  entryComponents: [
    AddConferenceDialogComponent
  ]
})
export class ConferenceModule { }
