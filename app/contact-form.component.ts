import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: './app/contact-form.component.html'
})
export class ContactFormComponent {
    log(control) {
        console.log(control);
    }
    onFormSubmit(form){
        console.log(form);
    }
}