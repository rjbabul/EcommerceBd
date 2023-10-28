import { Component } from '@angular/core';
import { DisplayAddToCartService } from '../../Service/display-add-to-cart.service';
import { Product } from '../../Models/product.model';
import { ProductOrderService } from '../../Service/product-order.service';

@Component({
  selector: 'display-add-to-cart',
  templateUrl: './display-add-to-cart.component.html',
  styleUrls: ['./display-add-to-cart.component.css']
})
export class DisplayAddToCartComponent { 
     product :Product [] = [] ;
    constructor(private displayAddtoCartService : DisplayAddToCartService, private productOrder: ProductOrderService)
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
}
