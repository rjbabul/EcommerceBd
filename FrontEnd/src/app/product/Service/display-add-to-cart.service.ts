import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Cart } from '../Models/cart.Model';
import { GetCartItemResponseModel } from '../Models/get-cart-item-response-model.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayAddToCartService {

  getCartItem(products: Product[]): GetCartItemResponseModel[] {
    var getCartItem =  localStorage.getItem('CartItems');
    let carts:Cart[]=[];
    var obj=[];
    if(getCartItem)
       obj = JSON.parse(getCartItem);

    if(obj)
     for(let i=0;i<obj.length;i++)
     {
       carts.push(obj[i]);
     }

     var cartItems: GetCartItemResponseModel[]=[];
     let cartItem : GetCartItemResponseModel;
     for(let i =0;i<carts.length;i++)
     {
        for(let j =0; j<products.length;j++){
         if(carts[i].id == products[j].productID)
          {
            let grand:number=0;
            let price = products[j].productPrice as number;
            let count = carts[i].count as number;
            grand= price*count;
              cartItem = {
              productID: products[j].productID , 
              productName : products[j].productName,
              productQuantity : carts[i].count,
              productPrice : products[j].productPrice,  
              grandproductPrice:grand,
              productImage :products[j].productImage,
              productDescription : products[j].productDescription,
              productCategory :products[j].productCategory
             };
              cartItems.push(cartItem);
          }
        }
     }
     return cartItems;
  }

  constructor(private httpClient: HttpClient) { }

  url:string ='https://localhost:7011/api/Product/get-cart-roducts';
  getAllProduct()
  {
    var getCartItem =  localStorage.getItem('CartItems');
    let carts:Cart[]=[];
    var obj=[];
    if(getCartItem)
       obj = JSON.parse(getCartItem);

    if(obj)
     for(let i=0;i<obj.length;i++)
     {
       carts.push(obj[i]);
     }
     
    let token = localStorage.getItem('Token');
    //const header = new HttpHeaders().set('Authorization', ''+token );
    var headers = new HttpHeaders({  
      'Authorization': 'Bearer '+JSON.parse(''+token)
   });
       var res= this.httpClient.post<Product[]>(this.url,carts, {headers:headers});
       
       return res;
  }
}

