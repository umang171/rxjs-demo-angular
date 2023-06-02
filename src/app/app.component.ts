import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // First Observable
  observable=new Observable(subscriber=>{
    subscriber.next("Hello");
    subscriber.next("Umang");
    subscriber.complete();
  });

  observer={
    next:(value: any)=>console.log(value),
    error:(error:any)=>console.error(error),
    complete:()=>console.log("completed")
  }

  constructor(){
    // this.observable.subscribe(this.observer);
    this.observable.subscribe(
      {
        next:(value)=>console.log(value),
        error:(error)=>console.log(error),
        complete:()=>console.log("complete")
      }
    );
  }
}
