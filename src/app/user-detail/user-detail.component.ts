import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

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
              }
            );
        }
      );
  }

  deleteClicked() {
    this.personsService.delete(this.user)
      .subscribe(
        success => {
          window.alert('Usuario borrado');
          this.router.navigate(['/users'])
        },
        error => window.alert('No tienes permiso para borrar')
      );

  }
}
