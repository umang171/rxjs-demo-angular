import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // First Observable
  observable=fromEvent(document,"click");

  observer={
    next:(value: any)=>console.log("next-",value),
    error:(error:any)=>console.error(error),
    complete:()=>console.log("completed")
  }

  constructor(){
    const sub1=this.observable.subscribe(this.observer);
    const sub2=this.observable.subscribe(this.observer);
  }
}
