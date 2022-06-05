import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../controller/service/admin.service";
import {Bungalow} from "../../../../controller/model/bungalow.model";
import {ReservationBungalow} from "../../../../controller/model/reservation-bungalow.model";

@Component({
  selector: 'app-admin-bungalow-disponible',
  templateUrl: './admin-bungalow-disponible.component.html',
  styleUrls: ['./admin-bungalow-disponible.component.css']
})
export class AdminBungalowDisponibleComponent implements OnInit {

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

  displayedColumns: string[] = ['numero','espace', 'capacity','description', 'prix','confirmer'];

  ngOnInit(): void {
    this.adminService.findBungalowDisponible(this.reservationBungalow.dateDebutHelp,this.reservationBungalow.dateFinHelp);


  }

  confirmerReservationBungalow(numero: number) {
    this.adminService.confirmerReservationBungalow(this.reservationBungalow.code,numero)
  }
}
