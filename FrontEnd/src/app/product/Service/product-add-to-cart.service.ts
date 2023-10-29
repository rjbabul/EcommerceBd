import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart.Model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAddToCartService {
 url:string= 'https://localhost:7011/api/Product/add-to-cart';
  constructor(private httpClient: HttpClient) { }

  ProductAddtoCart(ids:number):Observable<boolean>
  {
    
  var checkId= localStorage.getItem('CartItems');
  var obj ;
  let flag= true;
  if(checkId)
      obj = JSON.parse(checkId);

if(obj)
  for(let i = 0;i<obj.length;i++)
      {
        var myobj = obj[i];
        
        if(myobj.id == ids)
        {
          flag=false;
        } 
      }
    if(!flag){
      alert("This item Already Add to card.");
      return of(false);
    }    
    
    let cart:Cart= {
        id:ids,
        count:1
    };

    if(checkId)
         {
          var mylist = JSON.parse(checkId);
          mylist.push(cart);
         }
         else
         {
            mylist = [];
            mylist.push(cart);
         }

          var myjson = JSON.stringify(mylist);
          localStorage.setItem('CartItems', myjson);

         
    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
   console.log(mylist);
    var isSuccess= this.httpClient.post<boolean>(this.url,mylist, {headers:headers});
    if(isSuccess)return of(true);
    else return of(false);
  }
}
