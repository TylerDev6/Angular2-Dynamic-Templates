/**
 * Created by tpadley on 2016-10-05.
 */

import {Component} from "@angular/core";
import {TemplateWrapperBase} from "./template-wrapper-base";

@Component({
	selector: "dv6-class-template",
	template: `<template #content>
		<div class="modal-header">
			<h4 class="modal-title">Wrapper Template</h4>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" (click)="cancelModal()">Cancel</button>
			<button type="button" class="btn btn-secondary" (click)="saveModal()">Done</button>
		</div>
	</template>`
})

export class ClassTemplateComponent extends TemplateWrapperBase {
	cancelModal (): void {
		console.log("class template cancel");
	}
	
	saveModal (): void {
		console.log("class template save");
	}
}
