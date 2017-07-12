import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'voter',
    templateUrl: '../app/vote.component.html',
    styles: [`
        .glyphicon, .glyphicon-text {
            font-size: 40px;
            color: #ccc;
        }
        .vote-button { cursor: pointer; }
         .glyphicon-menu-up.highlighted, .glyphicon-menu-down.highlighted {
            color: yellow;
        }
        .vote li {
            list-style: none;
        }
    `]
})
export class VoterComponent {
    @Input() totalVote = 0;
    @Input() myVote = 0;
    @Output() change = new EventEmitter();

    onVoteUpClick() {
        if(this.myVote == 1)
            return;
        
        this.myVote++;
        this.change.emit({myVote: this.myVote, totalVote: this.totalVote });
    }
    
    onVoteDownClick() {
       if(this.myVote == -1)
            return;
        
        this.myVote--;
       this.change.emit({myVote: this.myVote, totalVote: this.totalVote });
    }
}