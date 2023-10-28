import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductEditService } from 'src/app/product/Service/product-edit.service';
import { ProductShowService } from 'src/app/product/Service/product-show.service';
import { Product } from 'src/app/product/Models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

    product:Product={

    };
  
   ids:number=0;
  constructor(private fb:FormBuilder, private productEditService: ProductEditService, private getProduct: ProductShowService,private route: ActivatedRoute)
  {
     
      let id= this.route.snapshot.paramMap.get('id');
      let peram :number = 0;
      if(id==null) peram =0;
      else peram = +id;
      this.ids= peram;
     this.getProduct.getProductById(peram).subscribe(aproduct=>(
      this.product=aproduct
     ));

  }

  productForm = this.fb.group({
    id : 0,
    productID :this.ids,
    productName:" ",
    productPrice:0,
    productDescription:" ",
     
 });
 
  Update()
    {
        let newProduct = this.productForm.value as Product;
        newProduct.productID = this.ids;
        let isSuccess = this.productEditService.update(newProduct).subscribe(p=>{
          if(isSuccess)
             alert("Product Update Successfully");
          else 
             alert("Product Can't be Updated");
          });
    }
}
