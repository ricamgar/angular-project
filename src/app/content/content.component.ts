import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  name = 'Paco';

  people = [
    {'name': 'Jose', 'age': '23', 'country': 'ES'},
    {'name': 'Sara', 'age': '30', 'country': 'FR'},
    {'name': 'Tomás', 'age': '31', 'country': 'ES'},
    {'name': 'Carla', 'age': '26', 'country': 'FR'},
    {'name': 'Laura', 'age': '29', 'country': 'UK'},
  ];
}
