import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {path:"view",component:ProductViewComponent},
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent}
]

@NgModule({
  declarations: [ProductViewComponent, CartComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProductModule { }
