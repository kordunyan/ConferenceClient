import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from '../modules/material.module';
import { BootstrapModule } from '../modules/bootstrap.module';
import { UserNavComponent } from './user-nav/user-nav.component';


@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    UserNavComponent
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
    SpinnerComponent
  ]
})
export class SharedComponentsModule { }
