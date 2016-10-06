import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {InlineFormComponent} from "./templates/inline/inline-form.component";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {NgModule} from "@angular/core";
import {SelectorComponent} from "./selector.component";
import {StoreSelectorComponent} from "./templates/store/store-selector.component";
import {TemplateStoreComponent} from "./templates/store/template-store.component";
import {TemplateIndexDirective} from "./templates/store/template-index.directive";
import {TemplateStore} from "./templates/template-store";
import {ModalClassComponent} from "./templates/store/modal-class.component";
import {ClassTemplateComponent} from "./templates/dynamic/class-template.component";
import {TemplateService} from "./templates/dynamic/template-service";
import {DynamicTemplateComponent} from "./templates/dynamic/dynamic-template.component";
import {CustomTemplateComponent} from "./templates/dynamic/custom-template.component";

@NgModule({
	imports: [BrowserModule, FormsModule, NgbModule, routing],
	declarations: [AppComponent, TemplateIndexDirective, SelectorComponent, InlineFormComponent, StoreSelectorComponent,
		TemplateStoreComponent, ModalClassComponent, ClassTemplateComponent, CustomTemplateComponent, DynamicTemplateComponent],
	entryComponents: [ClassTemplateComponent, CustomTemplateComponent],
	providers: [TemplateStore, TemplateService],
	bootstrap: [AppComponent]
})

export class AppModule {}