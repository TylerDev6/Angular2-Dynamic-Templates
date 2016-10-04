import {Component, TemplateRef} from "@angular/core";
import {Car} from "./car";
import {NgForm, NgModel} from "@angular/forms";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ViewChild} from "@angular/core";
import {Engine} from "./engine";

@Component({
	selector: "inline-form",
	template: require("./inline-form.component.html"),
	styles: [require("./inline-form.component.css")]
})

export class InlineFormComponent {
	@ViewChild("engineTemplate") private engineModal: TemplateRef<any>;
	
	car: Car;
	engine: Engine;
	dialog: NgbModalRef | null;
	
	constructor(private modalService: NgbModal) {
		this.car = new Car("Audi", "A6", "2006", "3.2L TFI");
		this.engine = new Engine("3.2L", "TDI");
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
		this.car.engine = this.engine.toString();
		if ( this.dialog ) {
			this.dialog.close();
			this.dialog = null;
		}
	}
}
