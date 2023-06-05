import { Component } from '@angular/core';
import { first, fromEvent, interval, map, of, take, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable =fromEvent(document,"click");
  observable2=interval(1000);
  constructor() {
    
    // this.observable
    // .pipe(
    //   map((event)=>(
    //     {
    //       x:(event as MouseEvent).clientX,
    //       y:(event as MouseEvent).clientY
    //   })),
    //   takeWhile(({x})=>x<=500)
    // )
    // .subscribe(console.log);
  
    this.observable2.pipe(
      takeUntil(this.observable)
    )
    .subscribe(console.log);
  } 
}
