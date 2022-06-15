import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AdherentService} from "../../controller/service/adherent.service";
import {AuthService} from "../../controller/auth/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private service: AdherentService,
              private authService: AuthService,
              private messageService: MessageService
  ) {
  }

  ngOnInit() {
  }

  submit() {
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginAdherent(username, passowrd);
    if (this.authService.error == false) {
      console.log("connected")
    } else if (this.authService.error == true) {
      this.messageService.add({severity: 'error', summary: 'Email ou mot de passe incorect'});
    }
  }

}
