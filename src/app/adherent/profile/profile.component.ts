import {Component, OnInit} from '@angular/core';
import {Adherent} from "../../controller/model/adherent.model";
import {AdherentService} from "../../controller/service/adherent.service";
import {AuthService} from "../../controller/auth/auth.service";
import {TokenService} from "../../controller/service/token.service";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private adherentService: AdherentService,
              private auth: AuthService,
              private tokenService: TokenService,
              private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit(): void {
    this.adherentByUsername();
    this.primengConfig.ripple = true;
  }

  lougOut() {
    this.auth.logout();
  }

  adherentByUsername() {
    this.auth.registerConnectedAdherent(this.adherent)
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    console.log(username)
    this.adherentService.findByUsername(username);
  }

//  getters
  get adherent(): Adherent {
    return this.adherentService.adherent;
  }
}
