import { Component } from '@angular/core';
import { LoggingService } from 'shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


  constructor(private logService:LoggingService){};

  msg:string="teja";
  nums:number=0;
  logMsg:string='';
  
  callLog():void{
    this.logMsg = this.logService.log();
  }
  
}