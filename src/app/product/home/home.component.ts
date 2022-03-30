import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { CrudService } from 'src/app/Service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:any=[];
  totalItem=0;
  constructor(private http:CrudService , private cart:CartService) { }


  ngOnInit(): void {
    this.http.getProduct().subscribe((res)=>{
      this.productList=res
      this.productList.forEach((a) => {
        Object.assign(a,{quantity:1,total:a.productPrice})
      });
    })
    this.cart.getProduct().subscribe((res)=>{
      this.totalItem=res.length;
    })
  }

 addTocart(product){
   this.cart.addToCart(product)
 }
}
