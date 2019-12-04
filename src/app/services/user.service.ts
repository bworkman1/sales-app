import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly CurrentUser;
  private authUserUrl = 'https://reqres.in/api/login';

  const;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
    this.CurrentUser = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : '';
  }

  isUserLoggedIn() {
    if (!this.CurrentUser) {
      return false;
    } else {
      const session = this.CurrentUser.session_id;
      const hfc = this.CurrentUser.hfc;
      const store = this.CurrentUser.store;
      if (session && store && hfc) {
        return true;
      }
    }
    return false;
  }

  authenticateUser(creds: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>(this.authUserUrl, creds.value, httpOptions)
      .pipe(
        catchError(err => {
          console.error(err.message);
        })
      );
  }

  getUser() {
    return this.CurrentUser;
  }

}
