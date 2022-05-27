import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

import {Login} from "../../controller/model/login.model";
import {AdherentService} from "../../controller/service/adherent.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AdherentService) {
  }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
  }

  get login(): Login {
    return this.service.login;
  }
}
