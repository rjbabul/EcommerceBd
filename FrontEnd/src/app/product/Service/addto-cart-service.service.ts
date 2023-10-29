import { Injectable } from '@angular/core';
import { DisplayAddToCartService } from './display-add-to-cart.service';
import { Cart } from '../Models/cart.Model';

@Injectable({
  providedIn: 'root'
})
export class AddtoCartServiceService {

  constructor(private displayCartItems:DisplayAddToCartService) { }

  updateCartquantity(ids:number, ch:boolean){
      var checkId= localStorage.getItem('CartItems');
      var obj ;
      let flag= true;
      if(checkId)
          obj = JSON.parse(checkId);
    var carts:Cart[]=[];

    if(obj)
      for(let i = 0;i<obj.length;i++)
          {
            if(obj[i].id== ids)
            {
              if(ch)
                obj[i].count++;
              else obj[i].count--;
              carts.push(obj[i]);
            } 
            else carts.push(obj[i]);
          }

      console.log(carts);
    var myjson = JSON.stringify(carts);
    localStorage.setItem('CartItems', myjson);

    var res= this.displayCartItems.getAllProduct();
    
    return res;
  }
}
