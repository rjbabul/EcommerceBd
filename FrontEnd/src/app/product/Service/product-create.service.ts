import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductDTO } from '../Models/product-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCreateService {

  constructor(private http : HttpClient) 
  { 

  }

  url :string= "https://localhost:7011/api/Product/addProduct";
   setProduct(product: Product) 
  {
    let C_Id:number = +(product.productCategory=="Phone"?1:product.productCategory=="Car"?2:3);
    let productdto:ProductDTO={
        id:0,
        productID : product.productID,
        productName: product.productName,
        CategoryId: C_Id,
        productImage:product.productImage,
        productPrice: product.productPrice,
        productDescription: product.productDescription

    }

    let token = localStorage.getItem('Token');
     
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
       return this.http.post<ProductDTO>(this.url,productdto, {headers:headers});
  } 
}
