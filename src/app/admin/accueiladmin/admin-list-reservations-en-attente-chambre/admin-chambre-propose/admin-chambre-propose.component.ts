import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../controller/service/admin.service";
import {Chambre} from "../../../../controller/model/chambre.model";
import {ReservationChambre} from "../../../../controller/model/reservation-chambre.model";
import {Reservation} from "../../../../controller/model/reservation.model";
import {ChambreLibre} from "../../../../controller/model/chambre-libre.model";

@Component({
  selector: 'app-admin-chambre-propose',
  templateUrl: './admin-chambre-propose.component.html',
  styleUrls: ['./admin-chambre-propose.component.css']
})
export class AdminChambreProposeComponent implements OnInit {


  constructor(private adminService: AdminService) {
  }



  get reservationChambre(): ReservationChambre {
    return this.adminService.reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this.adminService.reservationChambre = value;
  }

  get reservationChambres(): Array<ReservationChambre> {

    return this.adminService.reservationChambres;
  }

  get chambreLibres(): Array<ChambreLibre> {
    return this.adminService.chambreLibres;
  }

  get reservation(): Reservation {

    return this.adminService.reservation;
  }


  displayedColumns: string[] = ['numero','dateDebut','dateFin','proposer'];
  date10: any;

  ngOnInit(): void {
    this.adminService.findchambresPropose(this.reservation.dateDebutHelp,this.reservation.dateFinHelp);
  }

  proposer(dateDebutP:Date,dateFinP:Date,numero:number) {
    this.reservationChambre.dateDebutP=dateDebutP;
    this.reservationChambre.dateFinP=dateFinP;
    this.adminService.proposeReservationChambre(numero);

  }

}
