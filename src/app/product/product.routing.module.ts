import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "../products/product-list/product-add.component";


const productRoutes: Routes = [
  {
    path: 'addProduct', component: ProductAddComponent }
];

@NgModule({
  imports: [

    RouterModule.forChild(productRoutes),],
  exports:[RouterModule]})
export class ProductRoutingModule{

}