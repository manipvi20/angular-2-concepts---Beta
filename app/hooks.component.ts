import {Component} from 'angular2/core';

@Component({
    selector: 'life-cycle-hooks',
    template: `
    <div class="row"> 
        <h4>Angular 2 Life Cycle Hooks</h4>
        <ul>
            <li>Interface: OnInit :: Property : ngOnint()</li>
            <li>Interface: OnDestroy :: Property : ngOnDestroy()</li>
            <li>Interface: DoCheck :: Property : ngDoCheck()</li>
            <li>Interface: OnChange :: Property : ngOnChange()</li>
            <li>Interface: AfterContentInit :: Property : ngAfterContentInit()</li>
            <li>Interface: AfterContentChecked :: Property : ngAfterContentChecked()</li>
            <li>Interface: AfterViewInit :: Property : ngAfterViewInit()</li>
            <li>Interface: AfterViewChecked :: Property : ngAfterViewChecked()</li>
            <li>Interface: CanActive :: Property : routerCanActive()</li>
            <li>Interface: CanDeactive :: Property : routerCanDeactive(next,previous)</li>
        </ul>
    </div> 
    `
})
export class HooksComponent {

}