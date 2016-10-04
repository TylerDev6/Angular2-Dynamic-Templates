import {Component, ViewEncapsulation} from "@angular/core";

@Component({
	selector: "dv6-app",
	template: require("./app.component.html"),
	styles: [require("./app.component.css")],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	constructor() {
	}
}
