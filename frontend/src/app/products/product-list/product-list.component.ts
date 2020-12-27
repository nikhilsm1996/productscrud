import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service'
import { MatDialog,MatDialogConfig} from "@angular/material/dialog";
import { ProductCreateComponent } from '../product-create/product-create.component';
import { NgForm } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";


import {Product} from '../../shared/product.model'

export interface DragDropListItem {
  _id: string;
  Name: string;
  Status: string;
  Price: number;
  Brand: string;
  Care:string;
  Category:string;
  Color:string;
  Material:string;
  Size:string;
  AvailableDate:Date

}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  drop(event: CdkDragDrop<DragDropListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
listData:string[]

  constructor(public service:ProductService,private dialog: MatDialog,) { }
  

  ngOnInit(): void {
    
    this.service.refreshProductList();
    
   
  }
  

  onCreate() {
   this.service.resetForm();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(ProductCreateComponent,dialogConfig);
  }

  onEdit(prod:Product){
    
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
     this.dialog.open(ProductCreateComponent,dialogConfig);
     this.service.selectedProduct = prod;
    
  }

  onDelete(_id: string, form: NgForm){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.service.deleteProduct(_id).subscribe((res) => {
        this.service.refreshProductList();
        this.service.resetForm(form);
       
      });
    }
  }

  


}
