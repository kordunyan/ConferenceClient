import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueConferenceValidator } from './unique-conference-validator.directive';
import { PathExistsValidator } from './path-exists-validator.directive';

@NgModule({
  declarations: [
    UniqueConferenceValidator,
    PathExistsValidator
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UniqueConferenceValidator,
    PathExistsValidator
  ]
})
export class CustomDirectivesModule { }
