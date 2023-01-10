import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from '../products/product-list/product-add.component';

import { ProductRoutingModule } from './product.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';
import { ProductEffects } from '../state/products/product.effects';
import { productReducer } from '../state/products/product.reducer';
import { ProductShellComponent } from '../products/product-list/product-shell.component';
import { ProductsListComponent } from '../products/product-list/product-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductsListComponent,
  ProductAddComponent,
ProductShellComponent,

    StarComponent,
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    ProductRoutingModule,
    RouterModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])]
})
export class ProductModule { }