import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestAPIService
{
    constructor(private http:HttpClient)
    {}

    getCarService(param : string)
    {
       return this.http.get('http://localhost:8080/cars/'+param);
    }
}