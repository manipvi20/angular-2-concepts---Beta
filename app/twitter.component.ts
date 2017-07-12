import {Component, Input, Output, EventEmitter} from "angular2/core";
import {TwitterService} from './twitter.service';

@Component({
    selector: 'twitter',
    templateUrl: '../app/twitter.component.html',
    styles: [`
        .glyphicon-heart { 
            color: deeppink;
        }
        .glyphicon { cursor: pointer; }
        .twitter-name { 
            color: #AAAAAA;
        }
        .twitter-user {
            margin:30px auto;
        }
    `],
    providers: [TwitterService]

})
export class TwitterComponent {

    //@Input() isLiked = false;
    //@Input() totalLiked = 0;
    @Output() change = new EventEmitter();

    public twitterUsers: any[];

    constructor(twitterSerice: TwitterService){
        this.twitterUsers = twitterSerice.getTwitterUsers();
    }
    onTwitLike($event){
        console.log($event.target.dataset.twittername);
        let twittername = $event.target.dataset.twittername;
        let twitterUsers: any[] = this.twitterUsers;
        for(let twitUser of twitterUsers) {
            if(twittername === twitUser.twitterName) {
                twitUser.isLiked = !twitUser.isLiked;
                //this.isLiked ? this.totalLiked++ : this.totalLiked--; === this can be written like below as well
                twitUser.totalLikes += twitUser.isLiked ? 1 : -1;
                this.change.emit({twitteName: twitUser.twitterName, isLiked: twitUser.isLiked, totalLikes: twitUser.totalLikes});
            }
        }
    }
}