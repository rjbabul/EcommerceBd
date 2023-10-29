import { Component } from '@angular/core';
import { DisplayAddToCartService } from '../../Service/display-add-to-cart.service';
import { Product } from '../../Models/product.model';
import { ProductOrderService } from '../../Service/product-order.service';
import { ProductDeleteService } from '../../Service/product-delete.service';
import { DeleteAddToCartServiceService } from '../../Service/delete-add-to-cart-service.service';
import { GetCartItemResponseModel } from '../../Models/get-cart-item-response-model.model';
import { AddtoCartServiceService } from '../../Service/addto-cart-service.service';

@Component({
  selector: 'display-add-to-cart',
  templateUrl: './display-add-to-cart.component.html',
  styleUrls: ['./display-add-to-cart.component.css']
})
export class DisplayAddToCartComponent { 
     product :Product [] = [] ;
     cartItems : GetCartItemResponseModel[]=[];
      
    constructor(
                    private displayAddtoCartService : DisplayAddToCartService, 
                    private productOrder: ProductOrderService,
                    private productDelete:ProductDeleteService,
                    private addtoCart:AddtoCartServiceService,
                    private deleteCartitem:DeleteAddToCartServiceService)
    {
         this.displayAddtoCartService.getAllProduct().subscribe(products=>(
            this.cartItems=displayAddtoCartService.getCartItem(products)
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
       this.deleteCartitem.deleteAddTOCartItems(id).subscribe(products=>(
          this.cartItems= this.displayAddtoCartService.getCartItem(products)
       )); 
    }

    IncreaseQuantity(id:number)
    {
       this.addtoCart.updateCartquantity(id,Boolean(1)).subscribe(products=>(
          this.cartItems=this.displayAddtoCartService.getCartItem(products)
       ));
        
    }
    DecreaseQuantity(id:number)
    {
       this.addtoCart.updateCartquantity(id,Boolean(0)).subscribe(products=>(
          this.cartItems=this.displayAddtoCartService.getCartItem(products)
       ));
        
    }
}
