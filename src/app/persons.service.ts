import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  getAllPeople() {
    return this.http.get('http://localhost:8888/users');
  }
}
