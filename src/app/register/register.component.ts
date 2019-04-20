import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(''),
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private personsService: UsersService, private router: Router) { }

  onSubmit() {
    this.personsService.saveUser(this.userForm.value).subscribe(
      (user) => {
        console.log('User created: ' + user);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
