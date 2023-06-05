import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, from, fromEvent, interval, of, range, timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // observable=interval(1000);
  observable=timer(0,1000);
  constructor(){
    this.observable.subscribe(console.log);
  }
  
}
