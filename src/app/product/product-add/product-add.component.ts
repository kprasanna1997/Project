import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Service/crud.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm:FormGroup


  constructor(private fb:FormBuilder, private product:CrudService) {
    this.productForm=this.fb.group({
      productName:this.fb.control("",[Validators.required,Validators.pattern(/^[a-z A-Z]+$/)]),
      productPrice:this.fb.control("",[Validators.required,Validators.pattern(/^[0-9]+$/)]),
      productImageUrl:this.fb.control("",[Validators.required]),
      productDescription:this.fb.control("",[Validators.required])
    })
   }

   get productName(){
     return this.productForm.get("productName")
   }
   get productPrice(){
    return this.productForm.get("productPrice")
  }
  get productImageUrl(){
    return this.productForm.get("productImageUrl")
  }
  get productDescription(){
    return this.productForm.get("productDescription")
  }

  submit(){
    this.product.addProduct(this.productForm.value).subscribe((res)=>{
     console.log(res);  
     if(!res.error){
       this.productForm.reset()
       window.alert("Product adeed successfully")
     }

    })
    
  }
  ngOnInit(): void {
  }

}
