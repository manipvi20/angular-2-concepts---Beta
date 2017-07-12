import {Component, OnInit, ElementRef} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import {PostService} from './post.service';

@Component({
    selector: 'test-json-detail',
    template: `
    <div class="row">
        <h2> Test Component Details</h2>
        <h4>User Details:</h4>
        <div *ngFor="#user of testJson">
            <p><strong>Name : </strong>{{user.name}}</p>
            <p><strong>Username : </strong>{{user.username}}</p>
            <p><strong>E-Mail: </strong>{{user.email}}</p>
            <p><strong>Address : </strong>{{user.address.street}},<br> {{user.address.suite}}{{user.address.city}}, <br> ZipCode-{{user.address.zipcode}}</p>
            <p><strong>Phone : </strong>{{user.phone}}</p>
            <p><strong>Company:</strong>{{user.company.name}}</p>
       </div>
    </div>
    `,
    providers: [PostService,HTTP_PROVIDERS],
})


export class TestJsonDetailComponent {
    testJson;
    constructor(private _postservice: PostService, private _routeParams: RouteParams, private _el: ElementRef){
        
    }
    ngOnInit() {
        this._postservice.getTestJsonDetail(this._routeParams.get('username'))
        .subscribe(data=>{
            this.testJson = data;
        }); 
        this.userDetail();
    }
    userDetail () {
        //$('.testJson').addClass('router-link-active');
    }
}
