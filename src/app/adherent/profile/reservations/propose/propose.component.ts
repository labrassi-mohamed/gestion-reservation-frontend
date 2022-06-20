import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../controller/service/admin.service";
import {ReservationChambre} from "../../../../controller/model/reservation-chambre.model";
import {ChambreLibre} from "../../../../controller/model/chambre-libre.model";
import {Reservation} from "../../../../controller/model/reservation.model";

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css']
})
export class ProposeComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'dateDebut', 'dateFin', 'proposer'];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    // this.adminService.findchambresPropose(this.reservation.dateDebutHelp, this.reservation.dateFinHelp);
  }

  // Getters & Setters
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

}
