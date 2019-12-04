import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public isHidden = 1;
  public loginForm: FormGroup;
  private durationInSeconds = 5;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.createLoginForm();
  }

  ngOnInit() {
    console.log('Is the user logged in? ' + this.userService.isUserLoggedIn());
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      empNumber: [],
      userId: [],
      password: []
    });
  }

  checkLoginType(empNumber): void {
    this.isHidden = empNumber > 0 && empNumber < 1000 ? 0 : 1;
  }

  submitLogin() {
    this.userService.authenticateUser(this.loginForm).subscribe(res => {
      // @ts-ignore
      if (res.success) {
        // @ts-ignore
        for (const name in res.data) {
          // @ts-ignore
          if (res.data.hasOwnProperty(name)) {
            // @ts-ignore
            localStorage.setItem(name, res.data[name]);
          }
        }

        this.router.navigate(['/app']);
      } else {
        // @ts-ignore
        this.snackBar.open(res.msg, '', {
          duration: this.durationInSeconds * 1000,
          panelClass: 'snackBarError'
        });
      }
    }, error => {
      this.snackBar.open(error.statusText, '', {
        duration: this.durationInSeconds * 1000,
        panelClass: 'snackBarError'
      });
    });
  }

}
