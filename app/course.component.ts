import {Component, Input, Output, EventEmitter} from "angular2/core";
import {CourseService} from "./course.service";
import {AutoGrowDirective} from "./auto-grow.directive";
import {SummaryPipe} from './summary.pipes'

@Component({
    selector: 'cources',
    templateUrl: '../app/course.component.html',
    providers: [CourseService],
    directives: [AutoGrowDirective],
    styles: [`
        .glyphicon-heart { 
            color: deeppink; 
            cursor: pointer;
        }
    `],
    pipes: [SummaryPipe]
    //inputs: ['isFavourite']
})
export class CourseComponent { 
    title = "Title of course pages";
    inputVal = "Input value";
    courses: string[];
    isActive = true;
    isMobile = false;
    imgUrl = "https://static.pexels.com/photos/3247/nature-forest-industry-rails.jpg";

    viewMode = 'map';

    //@Input('is-fav') isFavourite = false; -- Different approach
    @Input() isFavourite = false;
    @Input() isLiked = false;
    @Input() totalLiked = 10;
    //isFavourite = false;

    @Output() change = new EventEmitter();

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

    courseDetail = {
        name: 'Course 1',
        students: 50052,
        price: 56.578,
        releaseDate: '2016-03-31',
        courseDescription: 'When executing npm install in a clean project directory, the version that satisfies package.json is installed for each dependency. Instead of specifying in package.json the exact version to be installed, npm allows you to widen the range of accepted versions.'
    }

    htmlText =  '<strong>Read More...</strong>';

    onDivClick($event){
        console.log('clicked div Element', $event);
    }
    onClick($event) {
        //this is parent div and the event will bubble up whn clicking child one - to avoid this below line
        $event.stopPropagation();
        console.log('clicked', $event);
    }

    starChange(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({newValue: this.isFavourite});
    }
    onHeartClick(){
        this.isLiked = !this.isLiked;
        //this.isLiked ? this.totalLiked++ : this.totalLiked--; === this can be written like below as well
        this.totalLiked += this.isLiked ? 1 : -1;
        this.change.emit({isLiked: this.isLiked, totalLiked: this.totalLiked});
    }


}