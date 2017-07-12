import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
            <div class="row zippy">
                <div class="panel panel-default">
                    <div class="zippy-title panel-heading"
                    (click)="toggle()">
                    {{title}}
                    <i class="glyphicon pull-right" [ngClass]="
                    {
                        'glyphicon-chevron-down': !isOpened,
                        'glyphicon-chevron-up': isOpened
                    }"></i>
                    </div>
                    <div 
                    *ngIf="isOpened" class="zippy-content panel-body">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
            `,
    styles: [`
        .zippy-title { cursor: pointer; }
        .panel { margin-bottom: 10px; }
    `]
})
export class ZippyComponent {
    isOpened = false;
    @Input() title: string;
    toggle() {
       this.isOpened = !this.isOpened;
       console.log(this.isOpened);
    }
}