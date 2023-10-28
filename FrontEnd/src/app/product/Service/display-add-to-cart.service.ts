import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayAddToCartService {

  constructor(private httpClient: HttpClient) { }

  url:string ='https://localhost:7011/api/Product/get-cart-roducts';
  getAllProduct()
  {
    let token = localStorage.getItem('Token');
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
       return this.httpClient.get<Product[]>(this.url, {headers:headers});
  }
}

