import { Component } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, interval, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable =interval(1000);
  observable2 =fromEvent(document,"click");
 
  constructor(){
    
    this.observable2
    .pipe(
        // mergeMap(()=>this.observable)
        // switchMap(()=>this.observable)
        // concatMap(()=>this.observable.pipe(take(3))),
        exhaustMap(()=>this.observable.pipe(take(3))),
      )
    .subscribe(console.log);
  }
  
}
