import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user.model';

@Injectable()
export class UsersService {

  public loggedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')));

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8888/users');
  }

  getById(id: number) {
    return this.http.get<User>('http://localhost:8888/user/' + id);
  }

  saveUser(user: User) {
    return this.http.post<User>('http://localhost:8888/user', user)
      .map(user => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.loggedUserSubject.next(user);
      });
  }

  login(mail: string, password: string) {
    return this.http.post<User>('http://localhost:8888/login', {mail: mail, password: password})
      .map(user => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.loggedUserSubject.next(user);
      });
  }

  updateUser(user: User) {
    return this.http.put<User>('http://localhost:8888/user/' + user.id, user);
  }



  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject.next(null);
  }

  delete(user: User) {
    return this.http.delete('http://localhost:8888/user/' + user.id)
  }
}
