import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../controller/service/admin.service";
import {Chambre} from "../../../../controller/model/chambre.model";
import {ReservationChambre} from "../../../../controller/model/reservation-chambre.model";
import {Reservation} from "../../../../controller/model/reservation.model";
import {Bungalow} from "../../../../controller/model/bungalow.model";
import {ReservationBungalow} from "../../../../controller/model/reservation-bungalow.model";
import {BungalowLibre} from "../../../../controller/model/bungalow-libre.model";

@Component({
  selector: 'app-admin-bungalow-propose',
  templateUrl: './admin-bungalow-propose.component.html',
  styleUrls: ['./admin-bungalow-propose.component.css']
})
export class AdminBungalowProposeComponent implements OnInit {



  constructor(private adminService: AdminService) {
  }

  get bungalows(): Array<Bungalow> {

    return this.adminService.bungalows;
  }
  get reservationBungalow(): ReservationBungalow {

    return this.adminService.reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this.adminService.reservationBungalow = value;
  }
  get reservation(): Reservation {

    return this.adminService.reservation;
  }

  get bungalowLibres(): Array<BungalowLibre> {

    return this.adminService.bungalowLibres;
  }
  displayedColumns: string[] = ['numero','dateDebut','dateFin','proposer'];
  date10: any;

  ngOnInit(): void {
    this.adminService.findbungalowPropose(this.reservation.dateDebutHelp,this.reservation.dateFinHelp);
  }

  proposer(dateDebutP:Date,dateFinP:Date,numero:number) {
    this.reservationBungalow.dateDebutP=dateDebutP;
    this.reservationBungalow.dateFinP=dateFinP;
    this.adminService.proposeReservationBungalow(numero);

  }
}
