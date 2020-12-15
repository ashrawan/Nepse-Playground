import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private mockUsers = {
    jack: {fullName: 'nepsestock User', username: 'nepsestock', position: 'Student', picture: 'assets/images/jack.png'},
    kate: {fullName: 'Kate Hasvil', username: 'Kate', position: 'Student', picture: 'assets/images/kate.png'},
  };

  constructor() {
  }

  getAuthUser(): Observable<User> {
    return of(this.mockUsers.jack);
  }
}
