import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SignUpComponent} from './signup-form.component';
import {ChangePasswordComponent} from './change-password.component';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'forms-example-component',
    template: `
        <div class="row">
            <h4>Angular Forms with Validation - Expicity</h4>
            <contact-form></contact-form>

            <h4>Angular Forms with Validation - Implicity - For Custom Validation</h4>
            <signup-form></signup-form>

            <h4>Password Change Form Task</h4>
            <change-password></change-password>

            <h4>Zippy Component</h4>

            <zippy title="Heading 1">
                This is Content 1
            </zippy>
            <zippy title="Heading 2">
                This is Content 2
            </zippy>

        </div>`,
    directives:[ContactFormComponent, SignUpComponent, ChangePasswordComponent,ZippyComponent]
})
export class FormsCompoent {

}