import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    window.location.href = 'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:4200/auth/redirect';
  }

}
