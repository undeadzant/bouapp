import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoucherieComponent } from './boucherie/boucherie.component';
import { VendorComponent } from './vendor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// here you can tell Angular how to route these paths
// For example ./about/about can be routed to just about
// so when you are on the site /about will go to the about page
const routes: Routes = [
  { path: '', component: HomeComponent},
 // { path: 'about/about', component: AboutComponent},
  { path: 'vendor', component: VendorComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
