import { Injectable } from '@angular/core';

@Injectable()
export class PersonsService {

  private people: ({'name': string, 'age': number, 'country': string})[] = [
    {'name': 'Jose', 'age': 23, 'country': 'ES'},
    {'name': 'Sara', 'age': 30, 'country': 'FR'},
    {'name': 'Tomás', 'age': 31, 'country': 'ES'},
    {'name': 'Carla', 'age': 26, 'country': 'FR'},
    {'name': 'Laura', 'age': 29, 'country': 'UK'},
  ];

  getAllPeople() {
    return this.people;
  }

  getPerson(name: string) {
    return this.people.filter((person) => {
      return person.name == name;
    })
  }
}
