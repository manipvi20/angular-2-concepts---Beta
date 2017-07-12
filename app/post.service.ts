import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Post} from './interfaces';

@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";
    private _gitHubBaseUrl = "https://api.github.com/users/";
    constructor(private _http: Http) {

    }
    //Observable
    getPost(): Observable<Post[]> {
        return this._http.get(this._url)
        .map(data=>data.json());
    }

    //Promise
    getPostUsingPromise(): Promise<Post[]> {
        return this._http.get(this._url)
        .map(data=>data.json()).toPromise();
    }

    createPost(post: Post){
        return this._http.post(this._url, JSON.stringify(post))
        .map(res => res.json());
    }

    getGitHubUsers(username): Observable<any> {
        return this._http.get(this._gitHubBaseUrl + username)
        .map(user=>user.json());
    }

    getGitHubFollwers(username): Observable<any> {
        return this._http.get(this._gitHubBaseUrl + username + "/followers")
        .map(followers=>followers.json());
    }

    getTestJson() {
        return this._http.get('./app/test.json')
        .map(followers=>followers.json());
    }

    getTestJsonDetail(username) {
        let testArr = [];
        return this._http.get('./app/test.json')
        .map(followers=>{
            let res = followers.json();
            for (let val of res) {
                if(val.username == username)
                    testArr.push(val);
            }
            return testArr;
        })
            
    }

}