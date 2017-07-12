import {Component} from 'angular2/core';
import {CourseComponent} from './course.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'courses-component-main',
    template: `
     <cources 
        [isFavourite]="post.isFavourite" 
        [isLiked]="post.isLiked" 
        [totalLiked]="post.totalLiked"
        (change)="onFavouriteChange($event)"
        >
           <div> Content which is coming from selector 'courses' in app.component file without any css selectors</div>
           <div class="cssSelector"> Content which is coming from selector 'courses' in app.component file with css selectors</div>
    </cources>
    <author></author>
    `,
    directives: [CourseComponent, AuthorComponent ]
})
export class CoursesComponentMain {
    post = {
        isFavourite: true,
        isLiked: true,
        totalLiked: 11
    };   
    onFavouriteChange($event) {
        console.log($event);
    }
}