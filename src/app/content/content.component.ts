import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  name = '';
  people: { name: string; age: number; country: string }[] = [];

  constructor(private personsService: PersonsService){}

  ngOnInit(): void {
    this.personsService.getAllPeople()
      .subscribe(
        (users: { name: string; age: number; country: string }[]) => {
          this.people = users;
        },
        (error) => {},
        () => {}
      )
  }
}
