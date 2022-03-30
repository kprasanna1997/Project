import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList:any=[];
productList=new BehaviorSubject<any>([])

  constructor() { }

  getProduct(){
   return this.productList.asObservable()
  }

  setProduct(product){
    this.cartList.push(...product)
    this.productList.next(product)
  }

  addToCart(product){
    this.cartList.push(product)
    this.productList.next(this.cartList)
    this.grandTotal()
    console.log(product);
    
  }

  grandTotal(){
    let grandTot=0;
    this.cartList.map((a)=>{
      grandTot+=parseInt(a.productPrice) 
    })
    return grandTot;
  }

  removeCartItem(product){
  this.cartList.map((a,index)=>{
    if(product.id === a.id){
      this.cartList.splice(index,1)
    }
  })
  this.productList.next(this.cartList)
  }

  removeAllCart(){
    this.cartList=[];
    this.productList.next(this.cartList)
  }
}
