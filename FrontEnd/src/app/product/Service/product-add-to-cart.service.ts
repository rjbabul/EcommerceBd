import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart.Model';

@Injectable({
  providedIn: 'root'
})
export class ProductAddToCartService {
 url:string= 'https://localhost:7011/api/Product/add-to-cart';
  constructor(private httpClient: HttpClient) { }
  ProductAddtoCart(ids:number)
  {
    let cart:Cart= {
        id:0,
        productId:ids
    };
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
    return  this.httpClient.post<boolean>(this.url,cart, {headers:headers});
  }
}
