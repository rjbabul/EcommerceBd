import { Component } from '@angular/core';
import { DisplayAddToCartService } from '../../Service/display-add-to-cart.service';
import { Product } from '../../Models/product.model';
import { ProductOrderService } from '../../Service/product-order.service';
import { ProductDeleteService } from '../../Service/product-delete.service';

@Component({
  selector: 'display-add-to-cart',
  templateUrl: './display-add-to-cart.component.html',
  styleUrls: ['./display-add-to-cart.component.css']
})
export class DisplayAddToCartComponent { 
     product :Product [] = [] ;
    constructor(
                    private displayAddtoCartService : DisplayAddToCartService, 
                    private productOrder: ProductOrderService,
                    private productDelete:ProductDeleteService)
    {
         this.displayAddtoCartService.getAllProduct().subscribe(products=>(
            this.product= products
         ));
     
    }

     isSuccessOrder:boolean = false;

    order()
    {

          let isSuccess = this.productOrder.orderSubmit().subscribe(p=>{
               if(isSuccess)
                    this.isSuccessOrder= true;
               else 
                    this.isSuccessOrder= false;
          });
               
    }
   
    isSuccessDelete:Boolean=false;
    RemoveFromCart(id:number)
    {
        let isSuccess= this.productDelete.productDelete(id).subscribe(p=>{
          if(isSuccess)
          {
               this.displayAddtoCartService.getAllProduct().subscribe(products=>(
                    this.product= products
                 ));
          }
     else 
          this.isSuccessDelete= false;
        })
    }
}
