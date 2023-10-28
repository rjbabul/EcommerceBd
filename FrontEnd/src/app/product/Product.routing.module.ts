import { NgModule } from "@angular/core";
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from "@angular/router";
import { ProductShowComponent } from "./Component/product-show/product-show.component";
import { ProductCreateComponent } from "./Component/product-create/product-create.component";
import { ProductEditComponent } from "./Component/product-edit/product-edit.component";
import { ProductDeleteComponent } from "./Component/product-delete/product-delete.component";
import { DisplayAddToCartComponent } from "./Component/display-add-to-cart/display-add-to-cart.component";
import { ProductOrderComponent } from "./Component/product-order/product-order.component";



const routes:Routes = [
    {path: 'product-show', component: ProductShowComponent }, 
    {path:'product-create', component:ProductCreateComponent},
    {path:'product-edit/:id', component: ProductEditComponent},
    {path:'product-delete/:id',component:ProductDeleteComponent},
    {path:'display-add-to-cart',component:DisplayAddToCartComponent},
    {path:'product-order', component:ProductOrderComponent}
]


@NgModule(
    {
        imports: [
            RouterModule.forChild(routes)
           ],
           exports: [RouterModule],
           providers:[
             provideRouter(routes,withComponentInputBinding())
           ]
    }
)
export class ProductRoutingModule{

}