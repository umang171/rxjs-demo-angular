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
    let count=0;
    const id=setInterval(()=>{
      subscriber.next(count);
      count++;
    },1000);
    return ()=>{
      console.log("Called");
      clearInterval(id);
    }
  });

  observer={
    next:(value: any)=>console.log(value),
    error:(error:any)=>console.error(error),
    complete:()=>console.log("completed")
  }

  constructor(){
    console.log("before");
    this.observable.subscribe(this.observer);
    console.log("after");    
  }
}
