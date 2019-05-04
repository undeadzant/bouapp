import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor.component';
import { BoucherieComponent } from './boucherie/boucherie.component';

@NgModule({
  declarations: [
    AppComponent, VendorComponent, BoucherieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
