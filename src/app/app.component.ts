import { Component } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { filter, map, mapTo, reduce, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = interval(1000);
  constructor() {
    
    this.observable.pipe(
      mapTo(-1),
      scan((prev,curr)=>prev+curr,11),
      filter(value=>value>=0)
    )
    .subscribe((value)=>{
      const timer=document.getElementById("timer");
      if(timer){
        timer.innerHTML=value.toString();
      }
      if(value==0){
        const message=document.getElementById("message");
        if(message){
          message.innerHTML="This is message";
        }
      }
    }
    );
  } 
}
