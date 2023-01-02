import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDataComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookDataComponent;
  let fixture: ComponentFixture<BookDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
