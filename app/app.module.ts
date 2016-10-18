import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationModules } from './modules';

@NgModule({
  imports: [...ApplicationModules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
