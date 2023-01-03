import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;
  let element:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should check whether @Output is
  correctly emitting event  object of string type `,()=>{
 //we are spying on emit method of the ratingclicked event object of the component
        spyOn(component.ratingClicked,'emit');

        //getting the div with crop class
        const div =fixture.nativeElement.querySelector('.crop');

        //we are assigning new textcontent to #h1
        fixture.nativeElement.querySelector('#h1').textContent=
        'child sending hello to parent';

        //we are creating inputText as a const and the value of #h1 textcontent
        const inputText = fixture.nativeElement.querySelector('#h1').textContent;
        fixture.detectChanges();

        //simulating the div click
        div.click();

        //angular change detection cycle is triggered to look out for changes in the component

        fixture.detectChanges();

        //once when the ratingclicked event emits the value "A new value in the child component';


        expect(component.ratingClicked.emit).
        toHaveBeenCalledWith(inputText);




  });
});