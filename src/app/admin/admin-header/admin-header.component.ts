import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../controller/auth/auth.service";
import {TokenService} from "../../controller/service/token.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Output() togglesidebarForMe: EventEmitter<any> = new EventEmitter();

  authUsername: string = this.token.getUsername();

  constructor(private auth: AuthService,
              private token: TokenService) {
  }

  ngOnInit(): void {
  }

  lougOut() {
    this.auth.logout();
  }

  togglesidebar() {
    this.togglesidebarForMe.emit();
  }

}
