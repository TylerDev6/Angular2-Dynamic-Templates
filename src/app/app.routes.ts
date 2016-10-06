import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InlineFormComponent} from "./templates/inline/inline-form.component";
import {StoreSelectorComponent} from "./templates/store/store-selector.component";
import {DynamicTemplateComponent} from "./templates/dynamic/dynamic-template.component";
const appRoutes: Routes = [
	{ path: "inline", component: InlineFormComponent },
	{ path: "store", component: StoreSelectorComponent },
	{ path: "dynamic", component: DynamicTemplateComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: true, errorHandler: (error) => {
	console.error("routing error: " + error);
} });
