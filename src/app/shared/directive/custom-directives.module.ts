import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueConferenceValidator } from './unique-conference-validator.directive';

@NgModule({
  declarations: [
    UniqueConferenceValidator
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UniqueConferenceValidator  
  ]
})
export class CustomDirectivesModule { }
