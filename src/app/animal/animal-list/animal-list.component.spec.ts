import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalListComponent);
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
