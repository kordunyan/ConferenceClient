import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '../modules/material.module';
import { BootstrapModule } from '../modules/bootstrap.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';
import { UploadFileProgressDialogComponent } from './dialog/upload-file-progress-dialog/upload-file-progress-dialog.component';


@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    UserNavComponent,
    ChipsInputComponent,
    UploadFileProgressDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    BootstrapModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    SpinnerComponent,
    ChipsInputComponent
  ],
  entryComponents: [
    UploadFileProgressDialogComponent
  ]
})
export class SharedComponentsModule { }
