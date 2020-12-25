import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private mockUsers = {
    jack: {fullName: 'Nepse User', username: 'testuser', position: 'Student', picture: 'assets/images/kitten-default.png'},
    kate: {fullName: 'Kate Hasvil', username: 'Kate', position: 'Student', picture: 'assets/images/kitten-default.png'},
  };

  constructor() {
  }

  getAuthUser(): Observable<User> {
    return of(this.mockUsers.jack);
  }
}
