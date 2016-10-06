import {Component} from "@angular/core";
import {TemplateWrapperBase} from "./template-wrapper-base";

@Component({
	selector: "dv6-custom-template",
	template: `<template #content let-c="close" let-d="dismiss">
		<div class="modal-header">
			<h4 class="modal-title">{{config?.title}}</h4>
		</div>
		<div class="modal-body">
			<p>{{config?.message}}</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" (click)="d()">Cancel</button>
			<button type="button" class="btn btn-secondary" (click)="c()">Done</button>
		</div>
	</template>`
})

export class CustomTemplateComponent extends TemplateWrapperBase {
	
}
