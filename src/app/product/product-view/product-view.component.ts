import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Service/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productList: any = [];
  productId:number;
  cancel:any;
  productForm: FormGroup


  constructor(private fb: FormBuilder, private http: CrudService) {
    this.productForm = this.fb.group({
      productName: this.fb.control("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
      productPrice: this.fb.control("", [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      productImageUrl: this.fb.control("", [Validators.required]),
      productDescription: this.fb.control("", [Validators.required])
    })
  }

  get productName() {
    return this.productForm.get("productName")
  }
  get productPrice() {
    return this.productForm.get("productPrice")
  }
  get productImageUrl() {
    return this.productForm.get("productImageUrl")
  }
  get productDescription() {
    return this.productForm.get("productDescription")
  }

  ngOnInit(): void {
    this.getProduct()
  }

  submit() {
    console.log(this.productForm.value);

  }
  getProduct() {
    this.http.getProduct().subscribe((res) => {
      this.productList = res
    })
  }

  editProduct(product) {
   this.productId=product.id;

   this.productForm.patchValue({
    productName:product.productName,
    productPrice:product.productPrice,
    productImageUrl:product.productImageUrl,
    productDescription:product.productDescription
   })
  }

  updateProduct(){
    this.http.updateProduct(this.productForm.value,this.productId).subscribe((res=>{
      console.log(res);

      if(!res.error){
        window.alert("Product updated successfully");
        this.productForm.reset();
        this.cancel=document.getElementById("close")
        this.cancel.click();
        this.getProduct()
      }
      
    }))
  }

  deleteProduct(id){
this.http.deleteProduct(id).subscribe((res)=>{
  console.log(res);
  if(!res.error){
    window.alert("Product deleted successfully");
    this.getProduct()
  }
})
  }

}
