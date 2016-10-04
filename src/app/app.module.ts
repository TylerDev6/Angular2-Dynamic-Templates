import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {InlineFormComponent} from "./templates/inline/inline-form.component";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {NgModule} from "@angular/core";
import {SelectorComponent} from "./selector.component";

@NgModule({
	imports: [BrowserModule, FormsModule, NgbModule, routing],
	declarations: [AppComponent, SelectorComponent, InlineFormComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}