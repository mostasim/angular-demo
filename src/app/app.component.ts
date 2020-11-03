import {Component} from '@angular/core';
import {Services} from './services/services';
import {Users} from './services/users';

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
  isLoading = false;

  constructor(private services: Services) {
  }

  onSubmit(): void {
    console.log('submitted ' + this.name + ' ' + this.email);
    this.names.push(this.name);
    this.name = '';
    this.email = '';
    console.log(this.names);
  }

  onClear(): void{
    this.names = [];
  }

  onFetch(): void {
    this.isLoading = true;
    this.services.getUser().subscribe(res => {
      this.isLoading = false;
      console.log(res.body);
      const users: Users = res.body;
      users.forEach(value => {
        this.names.push(value.name);
        console.log(value);
      });
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }

  remove(i: number): void {
    this.names.splice(i, 1);
  }
}
