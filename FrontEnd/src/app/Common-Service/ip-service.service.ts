import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private httpClient: HttpClient) { }

  public getIPAddress()  
  {  
    return this.httpClient.get<string>("http://api.ipify.org/?format=json");  
  }  

}
