import {Component, OnInit, ElementRef } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {CoursesComponentMain} from './coursesMain.component';
import {FormsCompoent} from "./forms.component";
import {ObservableComponent} from './observable-example';
import {HooksComponent} from './hooks.component';
import {TwitterAndVoterCompoent} from './twitterandVoter.component';

import {TestJsonComponent} from './testJson.component';
import {TestJsonDetailComponent} from './testJson-detail.component';

//import {RoutingLinkActive} from './routing-active.directive';


@RouteConfig([
    {path: '/coursesComponent', name: 'Courses', component: CoursesComponentMain },
    {path: '/voterTwitterComponent', name: 'VoterTwitter', component: TwitterAndVoterCompoent },
    {path: '/test', name: 'TestJson', component: TestJsonComponent},
    {path: '/test:username', name: 'Test', component: TestJsonDetailComponent},
    {path: '/formsExamples', name: 'Forms', component: FormsCompoent },
    {path: '/observableHttp', name: 'Http', component: ObservableComponent },
    {path: '/hooks', name: 'Hooks', component: HooksComponent },
    {path: '/*other', name: 'Other', redirectTo: ['Courses']}
])
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <div class="row form-group">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="/">Angular 2 Application</a>
                    </div>
                    <ul class="nav navbar-nav">
                    <li class="courses" [class.active]="_router.isRouteActive(_router.generate(['/Courses']))"><a [routerLink]="['Courses']">Courses</a></li>
                    <li class="twitter" [class.active]="_router.isRouteActive(_router.generate(['/VoterTwitter']))"><a [routerLink]="['VoterTwitter']">Voter & Twitter</a></li>
                    <li class="testJson" 
                    [class.active]="_router.isRouteActive(_router.generate(['/TestJson'])) || _router.isRouteActive(_router.generate(['/Test', {username: username}]))">
                        <a 
                        [routerLink]="['TestJson']">
                        TestJson
                        </a>
                    </li>
                    <li class="zippy" [class.active]="_router.isRouteActive(_router.generate(['/Forms']))"><a [routerLink]="['Forms']">Zippy & Forms</a></li>
                    <li class="observable" [class.active]="_router.isRouteActive(_router.generate(['/Http']))"><a [routerLink]="['Http']" >Observables & HTTP</a></li>
                    <li class="hooks" [class.active]="_router.isRouteActive(_router.generate(['/Hooks']))"><a [routerLink]="['Hooks']">Hooks</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
        .navbar-nav li { cursor: pointer; }
    `],
    directives: [
        ObservableComponent,
        ROUTER_DIRECTIVES,
        TestJsonComponent
        //RoutingLinkActive
    ]
})
export class AppComponent implements OnInit { 
    username;
    constructor(private _el : ElementRef, private _router: Router){
        
    }
    ngOnInit() {
        console.log(this._router)
        console.log(this._router.isRouteActive(this._router.generate(['/Test'])))
    }
    componentAdded($event) {
        this.username = $event.username;
    }
}