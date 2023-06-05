import { Component } from '@angular/core';
import { first, fromEvent, map, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = of(1,2,3,4,5);
  observable2 =fromEvent(document,"click");

  constructor() {
    this.observable
    .pipe(
      take(3)
    )
    .subscribe(console.log);

    this.observable2
    .pipe(
      map((event)=>(
        {
          x:(event as MouseEvent).clientX,
          y:(event as MouseEvent).clientY
      })),
      first(({x})=>x>200)
    )
    .subscribe(console.log);
  } 
}
