import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../controller/service/admin.service";
import {Chambre} from "../../../../controller/model/chambre.model";
import {Reservation} from "../../../../controller/model/reservation.model";
import {ReservationChambre} from "../../../../controller/model/reservation-chambre.model";

@Component({
  selector: 'app-admin-chambre-disponible',
  templateUrl: './admin-chambre-disponible.component.html',
  styleUrls: ['./admin-chambre-disponible.component.css']
})
export class AdminChambreDisponibleComponent implements OnInit {


  constructor(private adminService: AdminService) {
  }

  get chambres(): Array<Chambre> {

    return this.adminService.chambres;
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

  get reservation(): Reservation {
    return this.adminService.reservation;
  }


  displayedColumns: string[] = ['numero', 'espace', 'capacity', 'description', 'prix', 'confirmer'];
  date10: any;

  ngOnInit(): void {
    this.adminService.findchambresDisponible(this.reservation.dateDebutHelp, this.reservation.dateFinHelp);
  }

  confirmerReservationChambre(numero: number) {
    this.adminService.confirmerReservationChambre(this.reservationChambre.code, numero);

  }
}
