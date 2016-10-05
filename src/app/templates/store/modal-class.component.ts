/**
 * Created by tpadley on 2016-10-05.
 */

import {Component} from "@angular/core";

@Component({
	selector: "dv6-modal-class",
	template: `<div class="modal-header">
            <h4 class="modal-title">Class Template</h4>
        </div>
        <p>This template is from a class embedded in the template</p>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="cancelModal()">Cancel</button>
            <button type="button" class="btn btn-secondary" (click)="saveModal()">Done</button>
        </div>`
})

export class ModalClassComponent {
	constructor() {
	}
	
	cancelModal(): void {
		console.log("cancel class modal");
	}
	
	saveModal(): void {
		console.log("save class modal");
	}
}
