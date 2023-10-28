import { Component } from '@angular/core';
import { Product } from 'src/app/product/Models/product.model';
import { ProductShowService } from 'src/app/product/Service/product-show.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GetAllProductApiResponseModel } from '../../Models/get-all-product-api-response-model.model';
import { ProductAddToCartService } from '../../Service/product-add-to-cart.service';

@Component({
  selector: 'product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent {
      
  product :Product [] = [] ;
  responseProduct: GetAllProductApiResponseModel ={
    statusCode:0,
    message:"",
    data:[],
    common:0
  };
  constructor(private productShowService: ProductShowService,private addtoCart:ProductAddToCartService)
  {
     this.productShowService.getAllProduct().subscribe(products=>(
        this.product= products 
     )),
     console.log(this.product)
  }

  AddtoCard(id:number){
            console.log(id);
            var isSucess = this.addtoCart.ProductAddtoCart(id).subscribe(pa=>{
              
         });
  }
}
