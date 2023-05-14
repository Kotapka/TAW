import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lab8';

  public counter: number = 0;

  add(): void {
    this.counter++;
  }

  remove(): void {
    this.counter--;
  }
}
