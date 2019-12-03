import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly CurrentUser;

  constructor() {
    this.CurrentUser = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : '';
  }

  isUserLoggedIn() {
    if (!this.CurrentUser) {
      return false;
    } else {
      const session = this.CurrentUser.session_id;
      const hfc     = this.CurrentUser.hfc;
      const store   = this.CurrentUser.store;
      if (session && store && hfc) {
        return true;
      }
    }
    return false;
  }

  getUser() {
    return this.CurrentUser;
  }

}
