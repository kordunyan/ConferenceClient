import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive } from "@angular/core";
import { ConferenceHttpService } from "src/app/service/http/conference.http.service";
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Directive({
    selector: '[appUniqueSubjectValidator]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueConferenceValidator, multi: true }]
  })
export class UniqueConferenceValidator implements AsyncValidator  {

    constructor(private conferenceHttpService: ConferenceHttpService) {
    }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if (!control.value) {
            return of(null);
        }
        return this.conferenceHttpService.existsBySubkect(control.value)
            .pipe(
                map(exists => exists ? {uniqueSubject: true} : null)
            );
    }

}