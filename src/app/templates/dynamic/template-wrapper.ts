import {Observable} from "rxjs";
import {TemplateRef} from "@angular/core";
export interface TemplateWrapper {
	config (): any;
	
	getTemplateRef (): Observable<TemplateRef<any>>;
}
