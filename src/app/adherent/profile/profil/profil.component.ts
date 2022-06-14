import {Component, OnInit} from '@angular/core';
import {AdherentService} from "../../../controller/service/adherent.service";
import {AuthService} from "../../../controller/auth/auth.service";
import {TokenService} from "../../../controller/service/token.service";
import {Adherent} from "../../../controller/model/adherent.model";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private adherentService: AdherentService,
              private auth: AuthService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.adherentByUsername();
  }

  adherentByUsername() {
    this.auth.registerConnectedAdherent(this.adherent)
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    // console.log(username)
    this.adherentService.findByUsername(username);
  }

  //  getters
  get adherent(): Adherent {
    return this.adherentService.adherent;
  }

}
