import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events-list/events-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbEventService } from 'shared/inMemDbEventService';
import { TrusteeComponent } from './trustee/trustee.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { BookDataComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { AnimalDetailComponent } from './animal-details/animal-details.component';








@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    PenthouseComponent,
    StarComponent,
    CartComponent,
    RepeatDataPipe,
    AnimalListComponent,
    NavbarComponent,
    EventDetailComponent,
    EventListComponent,
    TrusteeComponent,
    StudentAddComponent,
    BookDataComponent,
    HomeComponent,
    AnimalDetailComponent,
    
  
    
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDbEventService),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
