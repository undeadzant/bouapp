import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'vendor',
    templateUrl: './vendor.component.html'
})

export class VendorComponent {

    vendors = {}

    constructor(private api: ApiService)
    {

    }

    post(vendors){
        this.api.postVendor(vendors)
    }

}