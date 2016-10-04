import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InlineFormComponent} from "./templates/inline/inline-form.component";
const appRoutes: Routes = [
	{ path: "inline", component: InlineFormComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: true, errorHandler: (error) => {
	console.error("routing error: " + error);
} });
