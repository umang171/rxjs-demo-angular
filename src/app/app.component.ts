import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { filter, from, fromEvent, map, mapTo, pluck } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable=fromEvent(document,"keyup");
  constructor(){
    this.observable.pipe(
      // map(event=>(event as KeyboardEvent).code)
      pluck('code')
    )
    .subscribe(console.log);
  }
  
}
