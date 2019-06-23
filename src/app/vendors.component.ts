import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from './api.service'
import { MatTableDataSource } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { PaginationService } from './pagination.service';
import { Vendor } from './models/vendors.model'

@Component({
    selector: 'vendors',
    templateUrl: './vendors.component.html'
})

export class VendorsComponent implements OnInit{    

    vendor = {}
    vendors

    constructor(private api: ApiService)    {   }

    ngOnInit() {
        this.api.getVendors().subscribe(res => {
            this.vendors = res
        });
    }

    post(vendors){
        this.api.postVendor(vendors)
    }

    delete(vendorsId) {  
        var ans = confirm("Do you want to delete vendor with Id: " + vendorsId);  
        if (ans) {  
            this.api.deleteVendor(vendorsId)
        }  
    }

    edit(vendors){
        this.api.putVendor(vendors)
    }

}

