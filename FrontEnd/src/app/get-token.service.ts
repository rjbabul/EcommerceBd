import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './CommonModels/user';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor(private http:HttpClient) { }
   token :string="";
  getToken()
  {
  
      const header = new HttpHeaders({
        'userName': 'babul',
        'password': 'password'
      });
      
      let url ="https://localhost:7011/api/Auth/getToken";
      return this.http.post<any>(url,null, { headers: header });
  }
}
