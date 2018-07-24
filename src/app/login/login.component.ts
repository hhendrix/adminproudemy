import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  debeRegistrar = false;

  constructor(public router: Router) { }

  ngOnInit() {

  }

  ingresar() {
    console.log('ingresando');

    this.router.navigate(['/dashboard']);
  }

}
