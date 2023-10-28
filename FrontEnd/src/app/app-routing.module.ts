import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTokenComponent } from './get-token/get-token.component';
 


const routes: Routes = [
  {path: 'get-token', component: GetTokenComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
