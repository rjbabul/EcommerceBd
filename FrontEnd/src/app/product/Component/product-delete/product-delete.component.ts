import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDeleteService } from 'src/app/product/Service/product-delete.service';

@Component({
  selector: 'product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})


export class ProductDeleteComponent {

     

      constructor(private productDeleteService: ProductDeleteService, private router: Router, private route : ActivatedRoute)
      {
           
        let id= this.route.snapshot.paramMap.get('id');
        let peram :number = 0;
        if(id==null) peram =0;
        else peram = +id;
        
        var isSucess = this.productDeleteService.productDelete(peram).subscribe(pa=>{
             this.router.navigate(['/product-show'])
        });

      }

}
