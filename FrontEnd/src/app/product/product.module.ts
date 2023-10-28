import { ProductShowComponent } from './Component/product-show/product-show.component';
import { ProductCreateComponent } from './Component/product-create/product-create.component';
import { ProductEditComponent } from './Component/product-edit/product-edit.component';
import { ProductDeleteComponent } from './Component/product-delete/product-delete.component';
import { ProductCreateService } from './Service/product-create.service';
import { ProductShowService } from './Service/product-show.service';
import { ProductEditService } from './Service/product-edit.service';
import { ProductDeleteService } from './Service/product-delete.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './Product.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ProductAddToCartService } from './Service/product-add-to-cart.service';
import { DisplayAddToCartComponent } from './Component/display-add-to-cart/display-add-to-cart.component';
import { DisplayAddToCartService } from './Service/display-add-to-cart.service';
import { ProductOrderComponent } from './Component/product-order/product-order.component';
import { ProductOrderService } from './Service/product-order.service';
 
@NgModule({
  declarations: [
    ProductShowComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DisplayAddToCartComponent,
    ProductOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule,
    MatSelectModule
  ],
  providers:[ProductCreateService,
    ProductShowService,
    ProductEditService, 
    ProductDeleteService, 
    ProductAddToCartService,
    DisplayAddToCartService,
    ProductOrderService
  ]
})
export class ProductModule { }
