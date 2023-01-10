import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'shared/event.service';
import { IEvent } from '../events/event-details/events';



@Component({
  selector: 'app-event-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventListComponent{
//getting events from parent component:event-detail
  @Input() eventsList:IEvent[]=[];

  @Input() message:string='';
  
}
