import {Directive, TemplateRef, Input, OnInit} from "@angular/core";
import {TemplateStore} from "../template-store";

@Directive({
	selector: "[dv6-template-index]",
})

export class TemplateIndexDirective implements OnInit {
	@Input("dv6-template-index") templateName: string;
	
	constructor( private templateStore: TemplateStore, private ref: TemplateRef<any> ) {
		
	}
	
	ngOnInit() {
		if ( this.ref && this.templateName ) {
			this.templateStore.addTemplate([this.templateName, this.ref]);
		}
	}
}
