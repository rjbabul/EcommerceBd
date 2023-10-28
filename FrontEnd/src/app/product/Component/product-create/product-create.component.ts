import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Product } from 'src/app/product/Models/product.model';
import { ProductCreateService } from 'src/app/product/Service/product-create.service';
import { FormBuilder,FormControl} from '@angular/forms';
import { ProductDTO } from '../../Models/product-dto.model';


@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
        constructor(private productCreateService: ProductCreateService ,private fb:FormBuilder )
        {
                 
        }
 
         product:Product={
                productID:0,
                 productName:"",
                 productPrice:0,
                 productImage:"",
                 productCategory:"",
                 productDescription:""
         }

         productForm = this.fb.group({
                 id : 0,
                 productID :0,
                 productName:" ",
                 productPrice:0,
                 productImage:"",
                 productCategory:"",
                 productDescription:" ",
              });

           

         save( )
        {
               
                let newProduct = this.product;
                console.log(newProduct);
                console.log(this.productForm);
              
                if(newProduct.productName==null || newProduct.productName.length<=0)
                {
                        alert("Product Name is required");
                }
                if(newProduct.productCategory==null || newProduct.productCategory=="")
                {
                        alert("Product Category is required");
                }

                if(newProduct.productID==0)
                {
                        alert("Product Id is required");
                }
                
                if(newProduct.productPrice==null || newProduct.productPrice==0)
                {
                        alert("Product price is required");
                }
 
                let isSuccess = this.productCreateService.setProduct(newProduct).subscribe(p=>{
                        if(isSuccess)
                           alert("Product Add Successfully");
                        else 
                           alert("Product Can't be Added");
                });
         }
}
