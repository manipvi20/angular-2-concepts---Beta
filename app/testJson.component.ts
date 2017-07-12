import {Component, OnInit, ElementRef, Output, EventEmitter} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, Router, CanDeactivate, CanActivate} from 'angular2/router';
import {PostService} from './post.service';

@Component({
    selector: 'test-json-comp',
    template: `
    <div class="row">
        <h4>Test Json</h4>
        <ul *ngFor="#testRow of testJson">
           <li><a [routerLink]="['Test', {username: testRow.username }]" (click)="onLinkClick($event)">{{testRow.username}}</a></li>
        </ul>
        <form #f="ngForm"  (ngSubmit)="onFormSubmit(f.form)">
        <div class="form-group">
            <lable>Name</lable><input type="text" 
            #name="ngForm" 
            ngControl="name"
            class="form-control" 
            required  
            (change)="onChnageForm(f.form)"/>
        </div>
        <div class="form-group">
            <lable>Comment</lable><textarea 
            class="form-control" 
            #comment="ngForm"
            ngControl="comment"
            required 
            (change)="onChnageForm(f.form)"></textarea>
        </div>
            <button class="btn btn-primary" type="submit" >Submit</button>
        </form>
    </div>
    `,
    providers: [PostService,HTTP_PROVIDERS],
    directives:[ROUTER_DIRECTIVES]
})
export class TestJsonComponent implements OnInit, CanDeactivate {
    testJson;
    formObj = {};
    @Output() change = new EventEmitter();
    constructor(private _postservice: PostService, private _router: Router, private _el: ElementRef){
        
    }
    ngOnInit() {
        this._postservice.getTestJson()
        .subscribe(data=>{this.testJson = data});
    }

    onFormSubmit(form) {
            this._router.navigate(['Hooks'])
            console.log("Form Submitted");
    }
    onChnageForm(f){
        console.log(f);
        this.formObj = f;
    }
    onLinkClick($event) {
         this.change.emit({username: $event.target.innerHTML});
        console.log($event.target.innerHTML);
    }
    routerCanDeactivate(next, previous) {
        if(this.formObj && this.formObj.dirty) {
         return confirm("Stay with this page?");   
        }
    }
}