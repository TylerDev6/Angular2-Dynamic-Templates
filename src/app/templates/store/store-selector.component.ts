import {Component} from "@angular/core";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {TemplateStore} from "../template-store";

@Component({
	selector: "dv6-store-selector",
	template: require("./store-selector.component.html"),
	styles: [require("./store-selector.component.css")]
})

export class StoreSelectorComponent {
	public config: any = {};
	
	private modal: NgbModalRef;
	
	constructor(private modalService: NgbModal, private templateStore: TemplateStore) {
	}
	
	openModal( name: string, config: any = {} ) {
		this.config = config;
		this.modal = this.modalService.open(this.templateStore.getTemplateByName(name));
	}
}
