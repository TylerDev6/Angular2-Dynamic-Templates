import {Component} from "@angular/core";

@Component({
	selector: "dv6-template-store",
	template: require("./template-store.component.html")
})

export class TemplateStoreComponent {
	cancelModal(): void {
		console.log("store selector cancel");
	}
	
	saveModal(): void {
		console.log("store selector save");
	}
}
