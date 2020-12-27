import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { ProductService } from './shared/product.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule
    
  ],
  providers: [ProductService],
  bootstrap: [SidenavComponent],
  entryComponents:[ProductCreateComponent]
})
export class AppModule { }
