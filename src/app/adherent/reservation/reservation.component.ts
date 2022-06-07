import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../controller/service/reservation.service";
import {Reservation} from "../../controller/model/reservation.model";
import {NgForm} from "@angular/forms";
import {AdherentService} from "../../controller/service/adherent.service";
import {TokenService} from "../../controller/service/token.service";
import {Adherent} from "../../controller/model/adherent.model";
import {Observable, Subscription} from "rxjs";
import {ReservationChambre} from "../../controller/model/reservation-chambre.model";
import {ReservationBungalow} from "../../controller/model/reservation-bungalow.model";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  constructor(private service: ReservationService,
              private adherentService: AdherentService,
              private token: TokenService) {
  }

  ngOnInit(): void {
    // this.loadUserByTokenUsername();
    // this.setReservationAdherent();
    this.getReservations();

  }

  onRegister(reservationForm: NgForm) {
    console.log(reservationForm.value)
  }


  getReservations() {
    const tokenDecoded = this.token.decode();
    const username = tokenDecoded.sub;
    this.service.getReservations(username);
  }

  async demandeReservation() {
    // await this.setReservationAdherent();
    if (this.reservation.type === "chambre") {
      this.cloneReservationChambre(this.reservation)
      this.service.demandeReservationChambre();
    } else if (this.reservation.type === "bungalow") {
      this.cloneReservationBungalow(this.reservation)
      this.service.demandeReservationBungalow()
    }
  }

  cloneReservationChambre(reservation: Reservation) {
    this.reservationChambre.beneficiaire = reservation.beneficiaire;
    this.reservationChambre.dateDebut = reservation.dateDebut;
    this.reservationChambre.dateFin = reservation.dateFin;
    this.reservationChambre.type = reservation.type;
  }

  cloneReservationBungalow(reservation: Reservation) {
    this.reservationBungalow.beneficiaire = reservation.beneficiaire;
    this.reservationBungalow.dateDebut = reservation.dateDebut;
    this.reservationBungalow.dateFin = reservation.dateFin;
    this.reservationBungalow.type = reservation.type;
  }

  // private setReservationAdherent() {
  //   this.reservation.adherent = this.loadUserByTokenUsername();
  // }

  // private loadUserByTokenUsername(): Adherent {
  //   const tokenDecoded = this.token.decode();
  //   const username = tokenDecoded.sub;
  //   return this.adherentService.findByUsername(username);
  // }

  //  Getters
  get reservation(): Reservation {
    return this.service.reservation;
  }

  set reservation(value: Reservation) {
    this.service.reservation = value;
  }

  get reservationChambre(): ReservationChambre {
    return this.service.reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this.service.reservationChambre = value;
  }

  get reservationBungalow(): ReservationBungalow {
    return this.service.reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this.service.reservationBungalow = value;
  }

}
