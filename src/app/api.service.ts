import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

    constructor(private http: HttpClient){}


    // res is response
    // => arrow function to console log the response for now
    postVendor(vendors){
        this.http.post('https://localhost:44333/api/vendors', vendors).subscribe(res => {
            console.log(res)
        })

    }
}