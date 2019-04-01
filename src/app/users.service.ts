import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8888/users');
  }

  getById(id: number) {
    return this.http.get<User>('http://localhost:8888/user/' + id);
  }

  saveUser(user: User) {
    return this.http.post<User>('http://localhost:8888/user', user);
  }
}
