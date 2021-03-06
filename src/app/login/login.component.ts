import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { NgForm } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  Onlogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.auth.onLogin(email, password).then((res) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
