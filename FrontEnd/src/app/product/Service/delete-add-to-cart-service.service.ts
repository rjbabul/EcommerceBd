import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart.Model';
import { DisplayAddToCartService } from './display-add-to-cart.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteAddToCartServiceService {

  constructor(private httpClient:HttpClient,
              private displayCartItems:DisplayAddToCartService) { }

  deleteAddTOCartItems(ids:number)
  {
       
      var checkId= localStorage.getItem('CartItems');
      var obj ;
      let flag= true;
      if(checkId)
          obj = JSON.parse(checkId);
    var carts:Cart[]=[];

    if(obj)
      for(let i = 0;i<obj.length;i++)
          {
            if(obj[i].id!= ids)
            {
              carts.push(obj[i]);
            } 
          }

      console.log(carts);
    var myjson = JSON.stringify(carts);
    localStorage.setItem('CartItems', myjson);

    var res= this.displayCartItems.getAllProduct();
    
    return res;
  }
}
