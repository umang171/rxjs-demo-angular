import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = from([1,2,3,4,5]);
  observable2=from([1,2,3,4,5]);
  constructor() {
    // reduce
    this.observable.pipe(
      reduce((prev,next)=>prev+next)
    )
    .subscribe(console.log);
    // scan
    this.observable2.pipe(
      scan((prev,next)=>prev+next)
    )
    .subscribe(console.log)

  }

 
}
