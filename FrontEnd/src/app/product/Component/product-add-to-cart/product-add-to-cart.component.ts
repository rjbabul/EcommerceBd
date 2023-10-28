import { Component } from '@angular/core';
import { ProductAddToCartService } from '../../Service/product-add-to-cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.css']
})
export class ProductAddToCartComponent {
     constructor(private addtoCart: ProductAddToCartService, private router:Router, private route: ActivatedRoute){
      let id= this.route.snapshot.paramMap.get('id');
      let peram :number = 0;
      if(id==null) peram =0;
      else peram = +id; 
      var isSucess = this.addtoCart.ProductAddtoCart(peram).subscribe(pa=>{
           this.router.navigate(['/product-show'])
      });

     }
}
