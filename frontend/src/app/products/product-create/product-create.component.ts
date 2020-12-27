import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.model';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  
  constructor(public service: ProductService,public dialogRef: MatDialogRef<ProductCreateComponent>) { }

  ngOnInit(): void {
    this.service.getProductList();
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.service.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        window.alert("Product Details SAVED")
        this.onClose();

       
      });
    }
    else {
      this.service.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshProductList();
        this.onClose();
        window.alert("Product Details UPDATED")
       
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.service.selectedProduct = {
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
    this.service.getProductList().subscribe((res) => {
      this.service.products = res as Product[];
    });
  }
  onClose() {
    
  
    
    this.dialogRef.close();
  }

}
