import { Component } from '@angular/core';
import { combineLatest, concat, endWith, forkJoin, from, merge, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable =from([1,2,3,4]);
  observable2 =from(['a','b','c','d']);
  constructor(){
    // this.observable.
    // pipe(
    //   startWith('a','b','c'),
    //   endWith('a','b','c'),
    // ).subscribe(console.log);

    // merge(this.observable,this.observable2).subscribe(console.log);
    // concat(this.observable,this.observable2).subscribe(console.log);
    // combineLatest(this.observable,this.observable2).subscribe(console.log);
    forkJoin(this.observable,this.observable2).subscribe(console.log);
  }
  
}
