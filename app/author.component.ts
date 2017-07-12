import {Component} from "angular2/core";
import {AuthorService} from "./author.service";

@Component({
    selector: 'author',
    template: `<h2>Authors</h2>
                <ul>
                    <li *ngFor="#author of authors">{{ author }}</li>
                </ul>
              `,
    providers: [AuthorService]
})
export class AuthorComponent {
    title = "Author Name";
    authors: string[];
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}