import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagfetchComponent } from './flagfetch/flagfetch.component';
import { FlagInfoComponent } from './flag-info/flag-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagfetchComponent,
    FlagInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
