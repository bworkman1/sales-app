import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUserUrl = 'http://localhost:8080/fake_db_returns/process.php?call=auth_user';

  const;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn() {
    if (localStorage.getItem('token')) {
      const hfcName = localStorage.getItem('hfc_name');
      const hfcNumber = localStorage.getItem('hfc_number');
      const storeNumber = localStorage.getItem('store_number');
      if (hfcName && hfcNumber && storeNumber) {
        return true;
      }
    }
    return false;
  }

  authenticateUser(creds: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>(this.authUserUrl, creds.value, this.httpOptions);
  }

  getUser() {
    const user = [];
    const keys = Object.keys(localStorage);
    for (const name in keys) {
      if (keys.hasOwnProperty(name)) {
        user[name] = localStorage.getItem(keys[name]);
      }
    }

    return user;
  }

}
