import { Component,OnChanges } from '@angular/core';
import { IpServiceService } from './Common-Service/ip-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { Cart } from './product/Models/cart.Model';
import { JsonPipe } from '@angular/common';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-project';

  ipAddress : string = '';
   TotalCartItem:number =0;
   num:Cart[]=[];
  constructor(private ipSerivice : IpServiceService){
      this.ipSerivice.getIPAddress().subscribe(ip=>(
          this.ipAddress = ip, console.log(this.ipAddress) , 
          this.ngOnChanges()
      ));
  }
   
  ngOnChanges(){
    
    var res = localStorage.getItem('CartItems');
    console.log(res);
    if(res)
    {

        this.TotalCartItem =JSON.parse(res).length;
    }
     
  }
    
    getToken()
    {
      window.open();
    }

  
}

