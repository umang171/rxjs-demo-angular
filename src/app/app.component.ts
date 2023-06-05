import { Component } from '@angular/core';
import { auditTime, debounceTime, fromEvent, sampleTime, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // observable =fromEvent(document,'click');
  observable =fromEvent(document,'keyup');
 
  constructor(){
    
    this.observable
    .pipe(
      // debounceTime(1000)
      // throttleTime(1000)
      // sampleTime(1000)
      auditTime(1000)
    )
    .subscribe(console.log);
  }
  
}
