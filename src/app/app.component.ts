import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observable = fromEvent(document, 'scroll');

  constructor() {
    this.observable.pipe(
      map(() => this.calculateScrollPercentage())
    )
    .subscribe(value=>{
      const scrollbarElement = document.getElementById("scrollbar");
      if (scrollbarElement) {
        scrollbarElement.style.width = `${value}%`;
      }
    });
  }

  calculateScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }
}
