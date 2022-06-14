import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../controller/auth/auth.service";
import {TokenService} from "../../controller/service/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 13rem;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {

  isLogged = this.auth.authenticated;
  connect: any;
  thenBlock: any;
  elseBlock: any;

  constructor(public auth: AuthService,
              private token: TokenService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.auth.logout();
  }
}
