import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OverviewModule } from './overview/overview.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
