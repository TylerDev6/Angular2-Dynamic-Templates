import {Injectable, TemplateRef} from "@angular/core";

@Injectable()
export class TemplateStore {
	private templates: [string, TemplateRef<any>][] = [];
	
	addTemplate(template: [string, TemplateRef<any>]):void {
		this.templates.push(template);
	}
	
	getTemplateByName( name: string ):TemplateRef<any> {
		return this.templates.find(template => template[0] === name)[1];
	}
}
