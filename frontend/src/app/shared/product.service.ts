import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {Product} from './product.model'
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/products';

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.selectedProduct = {
      _id: "",
      Name: "",
      Status: "",
      Price: null,
      Brand: "",
      Care:"",
      Category:"",
      Color:"",
      Material:"",
      Size:"",
      AvailableDate:null
    }
  }

  
  refreshProductList() {
    this.getProductList().subscribe((res) => {
      this.products = res as Product[];
    });
  }

  postProduct(prod:Product) {
    return this.http.post(this.baseURL, prod);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(prod: Product) {
    return this.http.put(this.baseURL + `/${prod._id}`, prod);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`,);
  }

 

}
