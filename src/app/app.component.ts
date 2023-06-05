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
      // subscriber.complete();
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
    const sub1=this.observable.subscribe(this.observer);
    const sub2=this.observable.subscribe(this.observer);
    console.log("after");    
    setTimeout(()=>{
      sub1.unsubscribe();
      sub2.unsubscribe();
    },3500);
  }
}
