import {Component} from '@angular/core';
import {Services} from './services/services';
import {User} from './services/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  date = new Date();
  name = '';
  email: '';

  names = ['Mostasim', 'Muntasir', 'Maruf', 'Hasan'];
  isBtnEnable = true;

  constructor(private services: Services) {
  }

  onSubmit(): void {
    console.log('submitted ' + this.name + ' ' + this.email);
    this.names.push(this.name);
    this.name = '';
    this.email = '';
    console.log(this.names);
    this.services.getUser().subscribe(res => {

      console.log(res);

      console.log('User ' + res.body);

    }, error => {
      console.log(error);
    });
  }
}
