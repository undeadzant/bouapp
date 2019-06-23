import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from './../api.service'
import { MatTableDataSource } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { PaginationService } from './../pagination.service';
import { Vendor } from './../models/vendors.model'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  dataSource = new MatTableDataSource<Vendor>()
    displayedColumns = ['vendorsId','vendorName','firstName','lastName']

    @Input('dataSource')
    set dataSourceForTable(value: Vendor[]) {
        this.dataSource = new MatTableDataSource<Vendor>(value);
    }

    @Input() totalCount: number;
    @Output() onDeleteCustomer = new EventEmitter();
    @Output() onPageSwitch = new EventEmitter();

    constructor(public paginationService: PaginationService) { }

  ngOnInit() {
  }

}
