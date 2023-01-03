import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './product-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    //first building block of angular testing module
    //TestBed
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});