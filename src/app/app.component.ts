import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-fourth-assignment';
  counters = [];

  onStart(event): void {
    this.counters.push(event);
  }
}
