import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user;

  constructor(private activatedRoute: ActivatedRoute, private personsService: UsersService) {}

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
}
