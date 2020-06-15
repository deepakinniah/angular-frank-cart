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

    getCartService(param : string)
    {
       return this.http.get('http://localhost:8080/items/'+param);
    }

    postCartService(item : any)
    {
       return this.http.post('http://localhost:8080/items', item);
    }

    deleteCartService(id : number)
    {
       return this.http.delete('http://localhost:8080/items/'+ id);
    }
}