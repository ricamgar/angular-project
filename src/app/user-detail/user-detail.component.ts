import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private personsService: PersonsService) {}

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
