import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()

export class ApiService {

    private selectedVendor = new Subject<any>();
    vendorSelected = this.selectedVendor.asObservable();
    
    
    constructor(private http: HttpClient){}

    getVendors(){
        return this.http.get('https://localhost:44333/api/vendors');
    }


    // res is response
    // => arrow function to console log the response for now
    // the 'subscribe' part is 
    postVendor(vendors){
        this.http.post('https://localhost:44333/api/vendors', vendors).subscribe(res => {
            console.log(res)
        })

    }

    selectVendor(vendors) {
        this.selectedVendor.next(vendors)
    }



    deleteVendor(id)
    {
            this.http.delete('https://localhost:44333/api/vendors/' + id, id).subscribe(res => {
                console.log(res), err => console.error(err)
        })
    }

    putVendor(vendor) {
        this.http.put('https://localhost:44333/api/vendors/${vendor.vendorsid}', vendor).subscribe(res => {
            console.log(res), err => console.error(err)
        })
    }
    
}