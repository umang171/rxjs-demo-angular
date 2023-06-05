import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { filter, from, map, mapTo } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable=from([1,2,3,4,5]);
  constructor(){
    this.observable.pipe(
      mapTo("Hello umang"),
    )
    .subscribe(console.log);
  }
  
}
