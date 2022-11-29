import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms";

export class RegisterValidators {
  static match (controleName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl)  : ValidationErrors | null => {
        const control = group.get(controleName);
        const matchingControl = group.get(matchingControlName);

        if (!control || !matchingControl) {
          console.error('Forms controls can not found in the form group');
          return { controlNotFound: false }
        };

        const error = control.value === matchingControl.value ? null : { noMatch: true };
        matchingControl.setErrors(error);
        return error;
      }
    }
}
