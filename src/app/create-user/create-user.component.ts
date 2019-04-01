import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('')
  });

  constructor(private personsService: UsersService) {
  }

  onSubmit() {
    this.personsService.saveUser(this.userForm.value).subscribe(
      (user) => {
        console.log('User created: ' + user.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
