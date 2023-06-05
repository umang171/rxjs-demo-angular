import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, fromEvent, of, range } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // First Observable
  observable=of([1],2,3,4,5);
  observable2=range(1,5);

  observer={
    next:(value: any)=>console.log("next-",value),
    error:(error:any)=>console.error(error),
    complete:()=>console.log("completed")
  }

  constructor(){
    const sub1=this.observable.subscribe(this.observer);
    const sub2=this.observable2.subscribe(this.observer);
  }
}
