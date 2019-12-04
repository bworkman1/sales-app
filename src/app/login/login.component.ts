import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public isHidden = 1;

  loginForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
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
    this.userService.authenticateUser(this.loginForm).subscribe(resp => {
    });
  }

}
