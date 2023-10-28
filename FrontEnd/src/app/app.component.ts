import { Component } from '@angular/core';
import { IpServiceService } from './Common-Service/ip-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-project';

  ipAddress : string = '';

  constructor(private ipSerivice : IpServiceService){
      this.ipSerivice.getIPAddress().subscribe(ip=>(
          this.ipAddress = ip, console.log(this.ipAddress)
          
      ));
  }

    getToken()
    {
      window.open();
    }

  
}

