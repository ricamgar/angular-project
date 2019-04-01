import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsersService} from '../users.service';
import 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  name = '';
  users: User[] = [];
  selectedUser = null;

  constructor(private personsService: UsersService, public router: Router){}

  ngOnInit(): void {
    this.personsService.getAllPeople()
      .subscribe(
        (users) => {
          this.users = users;
        },
        (error) => {console.log(error)}
      )
  }

  onPersonSelected(person: {id: number; name: string; age: number; country: string}) {
    this.selectedUser = person;
  }
}
