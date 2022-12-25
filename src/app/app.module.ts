import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    PenthouseComponent,
    StarComponent,
    CartComponent,
    RepeatDataPipe,
    AnimalListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
