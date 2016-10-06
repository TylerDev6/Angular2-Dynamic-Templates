import {Component, ViewContainerRef, Type, TemplateRef} from "@angular/core";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {TemplateService} from "./template-service";
import {ClassTemplateComponent} from "./class-template.component";
import {CustomTemplateComponent} from "./custom-template.component";

@Component({
	selector: "dv6-dynamic-template",
	template: require("./dynamic-template.component.html")
})

export class DynamicTemplateComponent {
	config: any = { title: "", message: "" };
	constructor(private view: ViewContainerRef, private modalService: NgbModal, private templateService: TemplateService) {
	}
	
	openModal (name: string): void {
		this.templateService.getTemplateContent(this.view, this.getModalType(name), this.config).then((template: TemplateRef<any>) => {
			let modal: NgbModalRef = this.modalService.open(template);
		})
	}
	
	getModalType(name: string ): Type<any> {
		switch (name) {
			case "ClassTemplate":
				return ClassTemplateComponent;
			case "CustomTemplate":
			default:
				return CustomTemplateComponent;
		}
	}
}
