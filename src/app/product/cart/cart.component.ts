import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any = []
  grandTotal:number;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe((res) => {
      this.product = res;
      this.grandTotal=this.cart.grandTotal();
    })
  }

 
 removeItem(item){
   this.cart.removeCartItem(item)
 }

 removeAll(){
   this.cart.removeAllCart()
 }
  
}
