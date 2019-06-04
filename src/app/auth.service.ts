import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AuthService {

    constructor(private http: HttpClient){}


    // res is response
    // => arrow function to console log the response for now
    register(credentials){
        this.http.post<any>('https://localhost:44333/api/account', credentials).subscribe(res =>{
            localStorage.setItem('token', res)
        })
    }
}