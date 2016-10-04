import {Component, TemplateRef} from "@angular/core";
import {Car} from "./car";
import {NgForm, NgModel} from "@angular/forms";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ViewChild} from "@angular/core";

@Component({
	selector: "inline-form",
	template: require("./inline-form.component.html")
})

export class InlineFormComponent {
	@ViewChild("engine") private engineModal: TemplateRef<any>;
	
	car: Car;
	engine: [string, string] = ["", ""]
	dialog: NgbModalRef | null;
	
	constructor(private modalService: NgbModal) {
		this.car = new Car("Audi", "A6", "2006", "3.2L TFI");
	}
	
	isInvalid(input: NgModel, form: NgForm): boolean {
		return !input.valid && (input.touched || form.submitted);
	}
	
	openModal(): void {
		this.dialog = this.modalService.open(this.engineModal);
	}
	
	cancelModal (): void {
		if ( this.dialog ) {
			this.dialog.dismiss();
			this.dialog = null;
		}
	}
	
	saveModal ():void {
		this.car.engine = this.engine.join(" ");
		if ( this.dialog ) {
			this.dialog.close();
			this.dialog = null;
		}
	}
}
