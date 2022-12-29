import { ComponentFixture, TestBed } from '@angular/core/testing';



import { EventListComponent } from './events-list.component';



describe('EventListComponent', () => {

  let component: EventListComponent;

  let element:HTMLElement;

  let fixture: ComponentFixture<EventListComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ EventListComponent ]

    })

    .compileComponents();



    fixture = TestBed.createComponent(EventListComponent);

    component = fixture.componentInstance;

    element=fixture.nativeElement;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should render@Input message correctly',()=>{



      let msg = " new message from parent";

      component.message=msg;

       fixture.detectChanges();

      const value =element.querySelector('#messageDisplay')?.textContent;

      expect(value).toEqual(msg);

     

  })

});