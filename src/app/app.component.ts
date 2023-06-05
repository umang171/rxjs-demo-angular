import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, from, fromEvent, of, range } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable=of(1,2,3,4,5);
  observable2=from([1,2,3,4,5]);
  observable3=from(fetch('https://api.github.com/users/octocat'));
  iterator=this.hello();
  observable4=from(this.iterator);
  observer={
    next:(value: any)=>console.log("next-",value),
    error:(error:any)=>console.error(error),
    complete:()=>console.log("completed")
  }
  
  constructor(){
    const sub=this.observable.subscribe(this.observer);
    const sub2=this.observable2.subscribe(this.observer);
    const sub1=this.observable3.subscribe(this.observer);
    const sub4=this.observable4.subscribe(this.observer);
  }
  
  *hello() {
    yield 'Hello';
    yield 'World';
  }
}
