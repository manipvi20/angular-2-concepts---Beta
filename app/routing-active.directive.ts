import {Directive, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: '[routerLinkActive]',
    host: {
        '(click)' : 'onClick()'
    }
})

export class RoutingLinkActive {
    constructor (private _el : ElementRef, private _renderer: Renderer) {

    }
    onClick() {
        this._renderer.setElementClass(this._el.nativeElement, 'active', true);
    }
}