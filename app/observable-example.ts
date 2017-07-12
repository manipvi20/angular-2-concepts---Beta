import {Component,ViewChild, ElementRef, AfterViewInit, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService} from './post.service';

//instead of importing all the methods from Rx js, we can import the method that all we need. Ex:
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'observable-component',
    template: `
        <div class="row form-group">
            <h4 class="aa">Observable Component</h4>
            <input id="search" #search class="form-control" type="text" name="search" />
        </div>
        <div class="row form-group">
            <h4>HTTP - GET Method</h4>
            <div *ngIf="isLoading1">
                <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
            </div>
            <ul *ngFor="#post of postServiceData, #i = index" >
                <li>{{post.id}}</li>
                <li>{{post.title}}</li>
                <li>{{post.body}}</li>
            </ul>

            <h4>Git Hub profile Example</h4>
            <div *ngIf="isLoading2">
                <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
            </div>
            <div class="row form-group" >
                <h4>@{{githubUser.login}}</h4>
                <img class="avatar" src="{{githubUser.avatar_url}}" /> 
            </div>
            <div class="row form-group">
                <div class="media col-sm-12">
                        <h4>Follwers</h4>
                        <div class="row github-follwers"  *ngFor="#followers of githubFollwers">
                            <div class="media col-sm-8">
                                <div class="media-left">
                                    <img class="avatar media-object" src="{{ followers.avatar_url }}" alt="img_{{followers.login}}">
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading"><strong>{{ followers.login }}</strong> </h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> {{test}}hhhhhhhhh
        </div>
    `,
    styles: [`
        .avatar {
            width: 100;
            height: 100;
            border-radius: 100%;
        }
    `],
    providers: [PostService, HTTP_PROVIDERS]
})
export class ObservableComponent implements OnInit {
    isLoading1 = true; isLoading2 = true;
    postServiceData;
    username = "octocat";
    githubUser = {};
    githubFollwers = [];

    constructor(private postService: PostService) { }

    @ViewChild('search') el:ElementRef; 

    ngOnInit() {
        this.postServiceFnc();
        this.githubServiceFnc();        
    }
    postServiceFnc() {
         //Observable
        this.postService.getPost()
        .delay(5000)
        .map(x=>x.splice(1, 3))
        //.subscribe(x=>console.log(x[0])) // will list out the properties available in interface in intelligence window 
         .subscribe(
            x=>{ 
            this.postServiceData = x; },
            error=>console.error(error),
             ()=> { this.isLoading1 = false; });


        // promise
        this.postService.getPostUsingPromise()
         .then(x=>console.log(x[0]));

        // Post response
        this.postService.createPost({userId: 1, title: "Test Title", body: "Test Body" });
    }

    githubServiceFnc() {
        //git hub example
        /*this.postService.getGitHubUsers()
        .subscribe(user=> {this.gitHubUser = user}           
        );
        this.postService.getGitHubFollwers()
        .subscribe(followers=> { this.gitHubFollowers = followers } );
*/
        Observable.forkJoin(
            this.postService.getGitHubUsers(this.username),
            this.postService.getGitHubFollwers(this.username))
            .subscribe(profile => {
                this.githubUser = profile[0],
                this.githubFollwers = profile[1].splice(1, 4);
            },
            error=>console.log("Error in github example"),
            ()=> { this.isLoading2 = false; })
    }

    ngAfterViewInit() {
        console.log(this.el.nativeElement);
        console.log($('#search'));
        //normal Jquery ajax call - it will have multiple call backs compared with Observable.
        /*
        var debounced = _.debounce(function(text){
            var url = "http://api.spotify.com/v1/search?type=artist&q=" + text;
            $.getJSON(url, function(artist){
                console.log(artist)
            });
        });

        $('#search').keyup(function(e){
            var text = e.target.value;
            if(text.length < 3)
                return;
            
            debounced(text);
        });
        */

        console.log("==From Array + .take()");
        Observable.fromArray([1,2,3,4,5])
        .take(3)
        .subscribe(x=>console.log(x))

        console.log("==of() + .take()");
        Observable.of([1,2,3,4,5],[6,7,8],[9,10,11],[13,14,15])
        .take(3)
        .subscribe(x=>console.log(x))

        console.log("==From Array + .map()");
         Observable.fromArray(['n','g',' ','2'])
         .map(x=>x.replace(' ', '-'))
        .subscribe(x=>console.log(x))

        console.log("==From Array + .flatMap()");
        Observable.fromArray([1,2,3])
         .flatMap(x=>Observable.of(['a','b','c']))
        .subscribe(x=>console.log(x))

        console.log("==From Array + .error()");
        Observable.fromArray([1,2,3,4,5])
        .subscribe(x=>console.log(x),
        error=>console.error(error),
        ()=>console.log("completed")
        )
        console.log(new Observable());
        console.log("==ForkJoin() of two observables");
        Observable.forkJoin(
            Observable.of({name:'mani'}),
            Observable.of([1,2,3]))
            .subscribe(x=>console.log(x)
        );

        console.log("==Delay and timeout");
        var realtime = Observable.of([1,2,3,4,5]).delay(5000);

        //realtime.timeout(1000) -- if we give 1000 we will have error in console.
        realtime.timeout(6000)
        .subscribe(x=> console.log(x),
        error=> console.error(error));


    var	remoteDataStream	=	Observable.throw(new Error("Something failed."));	
    remoteDataStream.catch(err	=>	{
                    var	localDataStream	=	Observable.of([1,	2,	3]);
                    return	localDataStream;
				})
				.subscribe(x	=>	console.log(x));


        var keyups = Observable.fromEvent($('#search'), 'keyup')
        .map(e=> e.target.value)
        .filter(text => text.length >= 3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
            var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
            var promise = $.getJSON(url);
            return Observable.fromPromise(promise);
        });



        keyups.subscribe(function(data){console.log(data);})


    }
}