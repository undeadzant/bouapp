import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule, MatMenu} from '@angular/material/menu';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor.component';
import { VendorsComponent } from './vendors.component';
import { BoucherieComponent } from './boucherie/boucherie.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@NgModule({
  declarations: [
    AppComponent, VendorComponent, BoucherieComponent, HomeComponent, AboutComponent, RegisterComponent, VendorsComponent, VendorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatTableModule]
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
