import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule, WavesModule, ButtonsModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
