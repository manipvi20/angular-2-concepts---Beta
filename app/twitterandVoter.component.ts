import {Component, OnInit} from 'angular2/core';
import {VoterComponent} from './vote.component';
import {TwitterComponent} from './twitter.component';
import {TwitterService} from './twitter.service';


@Component({
    selector: 'twitterAndVoterComponent',
    template: `
        <voter [myVote]="vote.myVote" 
        [totalVote]="vote.totalVote"
        (change)="onVoterChange($event)"></voter>
        
        <twitter (change)="onTwitteChange($event)"></twitter>
    `,
    directives: [VoterComponent,TwitterComponent],
    providers: [TwitterService]
})

export class TwitterAndVoterCompoent implements OnInit {
    twitterUsers;
    constructor(private twitterService : TwitterService){
        
    }
    vote= {
        myVote: false,
        totalVote: 10
    }
    ngOnInit() {
         this.twitterUsers = this.twitterService.getTwitterUsers();
    }
     onTwitteChange($event) {
        this.twitterService.updateNewData( $event );
    }
    onVoterChange($event) {
        console.log($event);
    }
}