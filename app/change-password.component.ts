import {Component} from "angular2/core";
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
//import {PasswordValidator} from './passwordValidator';

@Component({
    selector: 'change-password',
    templateUrl: './app/change-password.component.html'
})
export class ChangePasswordComponent {
    form: ControlGroup;
    
    constructor(fb:FormBuilder){
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength])],
            confirmPassword: ['', Validators.required ]
        //}, {validator: PasswordValidator.passwordsShouldMatch });
        })
    }
    changePassword () {
        this.validateConfirmPassword();
        if(this.form.valid == true) {
            alert("Successfully updated");
        }
    } 
    validateConfirmPassword(){
        if(this.form.value.confirmPassword !== "" && 
        this.form.value.newPassword !== '' && 
        this.form.value.newPassword !== this.form.value.confirmPassword){
            this.form.setErrors({
                passwordShouldMatch: true
            });
        }
        else {
            this.form.setErrors(null);
        }
    }
    log(old) {
        console.log(old)
    }

}

