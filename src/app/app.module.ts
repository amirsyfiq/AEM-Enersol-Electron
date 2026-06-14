import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { AppPage } from './app.page';
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    AppPage
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppPage]
})
export class AppModule { }
