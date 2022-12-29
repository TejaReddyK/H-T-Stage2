import { Component } from "@angular/core";

import { LoggingService } from "shared/logging.service";



@Component({

    selector:'welcome',

    templateUrl:'./welcome.component.html',

    styleUrls:['./welcome.component.css']

    })

   

export class WelcomeComponent{

    constructor(private loggingservice:LoggingService){ };

    welcomeMsg:string='welcome to angular app';

    title="Welcome";

    welcomeMsg2:string='rash';

    num:number=0;

    data:number=1;

    name:string='teja';



   

    str:string=this.loggingservice.log();

    log2(){

        alert(this.str);

    }

   

}