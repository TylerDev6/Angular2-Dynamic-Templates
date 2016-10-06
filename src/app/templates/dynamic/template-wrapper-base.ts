import {TemplateRef, ViewChild, AfterViewInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {TemplateWrapper} from "./template-wrapper";
export class TemplateWrapperBase implements AfterViewInit, TemplateWrapper {
	@ViewChild("content") private content: TemplateRef<any>;
	
	protected _config: any = {};
	
	get config (): any {
		return this._config;
	}
	
	set config( value: any ) {
		this._config = value;
	}
	
	private template: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>();
	
	getTemplateRef ():Observable<TemplateRef<any>> {
		return this.template.asObservable();
	}
	
	ngAfterViewInit (): any {
		if ( this.content ) {
			this.template.next(this.content);
			this.template.complete();
		}
	}
}