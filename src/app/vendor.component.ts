import { Component, OnInit } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'vendor',
    templateUrl: './vendor.component.html'
})

export class VendorComponent {

    vendor = {}
    vendorId

    constructor(private api: ApiService)
    {

    }

    ngOnInit() {
        this.api.vendorSelected.subscribe(vendor => this.vendor = vendor)
    }

    post(vendor){
        vendor.vendorId = this.vendorId;
        this.api.postVendor(vendor)
    }

}