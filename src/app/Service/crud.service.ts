import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  url = "http://localhost:3000/posts/"

  constructor(private http:HttpClient) { }

  addProduct(product) {
    return this.http.post<any>(`${this.url}`, product).pipe(map(res => {
      return res
    }))
  }

  getProduct() {
    return this.http.get<any>(`${this.url}`).pipe(map(res => {
      return res
    }))
  }

  updateProduct(product, id) {
    return this.http.put<any>(`${this.url}` + id, product).pipe(map(res => {
      return res
    }))
  }

  deleteProduct(id) {
    return this.http.delete<any>(`${this.url}` + id).pipe(map(res => {
      return res
    }))
  }
}
