import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDeleteService {

  constructor(private httpClient: HttpClient) { }

   
  productDelete(n :number)
  {
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
      let url= 'https://localhost:7011/api/Product/deleteproduct/'+ (n).toString();
      return  this.httpClient.delete<boolean>(url, {headers:headers});
  }
}
