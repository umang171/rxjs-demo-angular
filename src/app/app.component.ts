import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { map, reduce, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = from([1,2,3,4,5]);
  observable2=from([30,45,60]);
  constructor() {
    // reduce
    this.observable.pipe(
      tap(val=>console.log("before:",val)),
      reduce((prev,next)=>prev+next),
      tap(val=>console.log("after:",val))
    )
    .subscribe(console.log);
    // scan
    this.observable2.pipe(
      scan((prev,next)=>prev+next,15)
    )
    .subscribe(console.log)

  }

 
}
