import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';

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
    this.people = this.personsService.getAllPeople();
  }

  onSearch(name: string) {
    if (name == '') this.people = this.personsService.getAllPeople();
    else this.people = this.personsService.getPerson(name);
  }
}
