import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonsModule,
  IconsModule,
  NavbarModule,
  ScrollSpyModule,
  WavesModule,
  SmoothscrollModule,
  PageScrollService
} from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    ScrollSpyModule,
    SmoothscrollModule
  ],
  providers: [PageScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {}
