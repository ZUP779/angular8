import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DepScreen = false;
  EmpScreen = false;
  title = 'angular8';
  EmployeeClick = () => {
    this.DepScreen = false;
    if ( this.EmpScreen === false) {
      this.EmpScreen = true;
    } else {
      this.EmpScreen = false;
    }
  }
}
