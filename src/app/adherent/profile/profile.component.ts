import {Component, OnInit} from '@angular/core';
import {Adherent} from "../../controller/model/adherent.model";
import {AdherentService} from "../../controller/service/adherent.service";
import {AuthService} from "../../controller/auth/auth.service";
import {TokenService} from "../../controller/service/token.service";
import {PrimeNGConfig} from "primeng/api";
import {ReservationChambre} from "../../controller/model/reservation-chambre.model";
import {ReservationService} from "../../controller/service/reservation.service";
import {ReservationBungalow} from "../../controller/model/reservation-bungalow.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  i: number = 0;

  constructor(private adherentService: AdherentService,
              private auth: AuthService,
              private tokenService: TokenService,
              private serviceResrvation: ReservationService,
              private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit(): void {
    this.adherentByUsername();
    this.serviceResrvation.allReservationChambresAdherent();
    this.serviceResrvation.allReservationBungalowAdherent();
    console.log(this.reservationChambres)
    this.primengConfig.ripple = true;
  }

  lougOut() {
    this.auth.logout();
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

  get reservationChambres(): Array<ReservationChambre> {
    return this.serviceResrvation.reservationChambres;
  }

  get reservationBungalows(): Array<ReservationBungalow> {
    return this.serviceResrvation.reservationBungalows;
  }

}
