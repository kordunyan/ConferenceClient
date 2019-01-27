import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenceRoutingModule } from './conference-routing.module';
import { ConferenceRootComponent } from './conference-root/conference-root.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { AddConferenceDialogComponent } from './add-conference-dialog/add-conference-dialog.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectivesModule } from 'src/app/shared/directive/custom-directives.module';


@NgModule({
  declarations: [
    ConferenceRootComponent, 
    ConferenceListComponent, 
    AddConferenceComponent, 
    AddConferenceDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomDirectivesModule,
    ConferenceRoutingModule,
    
  ],
  entryComponents: [
    AddConferenceDialogComponent
  ]
})
export class ConferenceModule { }
