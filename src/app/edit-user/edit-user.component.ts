import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {User} from '../user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute, private personsService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => {
          let id = params['id'];
          this.personsService.getById(id)
            .subscribe(
              user => {
                this.user = user;
                this.userForm.setValue({name: user.name, age: user.age});
              }
            );
        }
      );
  }

  onSubmit() {
    this.user.name = this.userForm.get('name').value;
    this.user.age = this.userForm.get('age').value;

    this.personsService.updateUser(this.user)
      .subscribe(
        user => {
          window.alert('Usuario actualizado');
          this.router.navigate(['/users'])
        },
        error => window.alert('No tienes permiso para actualizar')
      )
  }
}
