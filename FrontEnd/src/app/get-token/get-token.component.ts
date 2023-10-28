import { Component } from '@angular/core';
import { GetTokenService } from '../get-token.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent {
       constructor(private _getTockenService:GetTokenService, private router: Router)
       {
            
            _getTockenService.getToken().subscribe(p=>(
              localStorage.setItem('Token', JSON.stringify(p.data.token)),
              console.log(p.data.token),
              this.router.navigate(['/product-show']) 
              ));
          
       }
}
