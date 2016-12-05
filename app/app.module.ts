import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from './app.component';
import { ApplicationModules } from './modules';

@NgModule({
  imports: [...ApplicationModules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
