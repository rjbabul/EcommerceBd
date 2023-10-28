import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { GetAllProductApiResponseModel } from '../Models/get-all-product-api-response-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProductShowService {

  constructor(private httpClient: HttpClient) 
  { 

  }

  getAllProduct():Observable<Product[]>
  {     
    
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
    
    const url: string = 'https://localhost:7011/api/Product/getallproduct';
 
     return this.httpClient.get<Product[]>(url, {headers});
  }

  getProductById(id:number) 
  {

    let url = '';
    return this.httpClient.get<Product>(url);
  }

}
