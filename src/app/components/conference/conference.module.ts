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


@NgModule({
  declarations: [
    ConferenceRootComponent, 
    ConferenceListComponent, 
    AddConferenceComponent, 
    AddConferenceDialogComponent, 
    DetailPageComponent, 
    SendEmailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
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
