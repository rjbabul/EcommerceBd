import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductEditService {

  constructor( private httpclient: HttpClient) { }

  update(product:Product)
  {
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
     let url :string= "https://localhost:7011/api/Product/updateproduct";
      return this.httpclient.put<Product>(url, product, {headers:headers});
  }
  
}
