import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"product",loadChildren:()=>import("./product/product.module").then(m=>m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
