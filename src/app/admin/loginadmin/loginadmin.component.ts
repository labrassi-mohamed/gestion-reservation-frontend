import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdherentService} from "../../controller/service/adherent.service";
import {AuthService} from "../../controller/auth/auth.service";
import {MessageService} from "primeng/api";
import {AdminService} from "../../controller/service/admin.service";

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private service: AdminService,
              private authService: AuthService,
              private messageService : MessageService
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginAdmin(username, passowrd);
  }

}
