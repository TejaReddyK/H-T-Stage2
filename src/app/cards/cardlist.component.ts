import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';



@Component({

  selector: 'cardlist',

  templateUrl: './cardlist.component.html',

  styleUrls: ['./cardlist.component.css']

})

export class CardlistComponent implements OnInit{

    ngOnInit(): void {

      const obs1=new Observable((data)=>data.next(Math.random()));

      obs1.subscribe(d=>console.log(d));

      obs1.subscribe(d=>console.log(d));



      const subject=new Subject();

      subject.subscribe(d=>console.log(d));

      subject.subscribe(d=>console.log(d));

      subject.next(Math.random());

    }

}