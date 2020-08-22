import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counter = new EventEmitter();
  count = 0;
  ref;

  constructor() {
  }

  ngOnInit(): void {
  }

  onBtnStart(): void {
    const eventEmitter = () => {
      this.count += 1;
      this.counter.emit(this.count);
      console.log('Event Emitted With number: ' + this.count);
    };
    this.ref = setInterval(eventEmitter, 1000);
  }

  onBtnStop(): void {
    this.count = 0;
    clearInterval(this.ref);
  }
}
