import { Component } from '@angular/core';
import { Observable, distinctUntilChanged, distinctUntilKeyChanged, first, from, fromEvent, interval, map, of, take, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable =of(1,1,2,'2',3,3,3,4,5,3);
  observable2 =from([
    {name:"Umang",code:1},
    {name:"Umang",code:2},
    {name:"Umang",code:3},
  ]);
  constructor(){
    
    this.observable
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(console.log);

    this.observable2
    .pipe(
      distinctUntilKeyChanged('name'),
      map((obj)=>obj.name)
    )
    .subscribe(console.log);
  }
  
}
