import { Component, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export interface Fruit {
  name: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.css']
})
export class ChipsInputComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() visible = true;
  @Input() selectable = true;
  @Input() removable = true;
  @Input() addOnBlur = true;
  @Input() placeholder = '';
  @Input() valuesList: string[] = [];
  @Input() errorMessage = '';
  @Input() validators;
  emailFormControl;
  

  constructor() {
    
    //Validators.email
  }

  ngOnInit() {
    this.emailFormControl = new FormControl('', this.validators); 
  }

  add(event: MatChipInputEvent): void {
    if (this.emailFormControl.invalid) {
      return;
    }
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.valuesList.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  remove(value): void {
    const index = this.valuesList.indexOf(value);

    if (index >= 0) {
      this.valuesList.splice(index, 1);
    }
  }

}
