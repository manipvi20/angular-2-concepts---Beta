import {Component} from "angular2/core";
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common"; 
import {UserNameValidators} from './usernNameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: './app/signup-form.component.html'
})
export class SignUpComponent {
    //we also have more easiet way for the below control group validators
    /*form = new ControlGroup({
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });*/

    form: ControlGroup;

    constructor(fb: FormBuilder){
       this.form =  fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UserNameValidators.CannotContainSpace
            ]), UserNameValidators.shoulbeUnique],
            password: ['', Validators.required]
        });
    }

    signup() {
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        console.log(this.form.value);
    }
}