import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { IpServiceService } from './Common-Service/ip-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetTokenComponent } from './get-token/get-token.component'; 


@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    BrowserAnimationsModule,
  ],
  providers: [IpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
