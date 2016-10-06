/**
 * Created by tpadley on 2016-09-15.
 */

import {
	Injectable,
	ViewContainerRef,
	ComponentFactoryResolver,
	TemplateRef,
	Type,
	ComponentFactory,
	ComponentRef
} from "@angular/core";
import {TemplateWrapper} from "./template-wrapper";

@Injectable()
export class TemplateService {
	
	constructor(private resolver: ComponentFactoryResolver ) {
		
	}
	
	public getTemplateContent ( viewContainer: ViewContainerRef, component: Type<any>, config: any = {} ): Promise<TemplateRef<any>> {
		return new Promise((resolve, reject) => {
			let factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);
			let ref: ComponentRef<any> = viewContainer.createComponent(factory);
			let instance: TemplateWrapper = <TemplateWrapper>ref.instance;
			
			if ( !instance ) {
				reject("component does not implement TemplateWrapper");
			}
			instance.config = config;
			instance.getTemplateRef().subscribe((template: TemplateRef<any>) => {
				if ( template !== null ) {
					resolve(template);
				} else {
					reject("template does not exist in this component: " + component);
				}
				ref.destroy();
			}, (error) => {
				reject(error);
				ref.destroy();
			});
		});
	}
	
}
