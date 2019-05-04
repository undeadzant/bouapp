import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoucherieComponent } from './boucherie/boucherie.component';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
 // { path: '', component: BoucherieComponent},
 // { path: 'boucherie', component: BoucherieComponent},
  { path: 'vendor', component: VendorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
