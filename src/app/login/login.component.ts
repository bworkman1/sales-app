import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isHidden = 1;

  loginForm = new FormGroup({
    empNumber: new FormControl(''),
    userId: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.userService.isUserLoggedIn());
  }

  checkLoginType(empNumber): void {
    this.isHidden = empNumber > 0 && empNumber < 1000 ? 0 : 1;
  }

  login() {
    console.log(this.loginForm.value);
  }

}
