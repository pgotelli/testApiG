import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onButtonClick() {
    var casa = "0";
    this.title = 'Hello from Kendo UI!' + casa;
  }
}
