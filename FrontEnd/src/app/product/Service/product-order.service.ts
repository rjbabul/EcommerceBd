import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductOrderService {

  constructor(private httpClient: HttpClient) { }

   url :string ='';
  orderSubmit()
  {
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
    let thisTime:string = Date.UTC.toString();
    return this.httpClient.post<boolean>(this.url,thisTime, {headers:headers});
  }
}
