import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AnimalsListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalsListComponent;
  let fixture: ComponentFixture<AnimalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the header name',()=>{

    const data ="Animal List";
  
    const rootEle:DebugElement = fixture.debugElement;
  
    const header =rootEle.query(By.css('.card-header'));
  
  
  
    const headerElement:HTMLElement= header.nativeElement;
  
  
  
    expect(headerElement.textContent).toEqual('Animal List');
  
  });
});
