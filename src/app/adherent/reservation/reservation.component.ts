import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../controller/service/reservation.service";
import {Reservation} from "../../controller/model/reservation.model";
import {NgForm} from "@angular/forms";
import {AdherentService} from "../../controller/service/adherent.service";
import {TokenService} from "../../controller/service/token.service";
import {Adherent} from "../../controller/model/adherent.model";
import {ReservationChambre} from "../../controller/model/reservation-chambre.model";
import {ReservationBungalow} from "../../controller/model/reservation-bungalow.model";
import Swal from 'sweetalert2'
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private service: ReservationService,
              private adherentService: AdherentService,
              private token: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegister(reservationForm: NgForm) {
    // console.log(reservationForm.value)
  }

// Demande de reservation
  demandeReservation() {
    if (this.reservation.type === "chambre") {
      this.cloneReservationChambre(this.reservation);
      this.service.demandeReservationChambre();
      if (this.service.error == false) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre réservation bien enregistrée',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/profile/reservations']);
      } else if (this.service.error === true) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Problème veuillez réessayer !!'
        })
      }
    } else if (this.reservation.type === "bungalow") {
      this.cloneReservationBungalow(this.reservation)
      this.service.demandeReservationBungalow();
      if (this.service.error == false) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Votre réservation bien enregistrée',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/profile']);
      } else if (this.service.error == true) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Problème veuillez réessayer !!'
        })
      }
    }
  }
  // Fin demande de reservation

  getReservationChambres() {
    const tokenDecoded = this.token.decode();
    const username = tokenDecoded.sub;
    this.service.getReservationChambres(username);
  }

  // private methods
  private cloneReservationChambre(reservation: Reservation) {
    this.loadUserByTokenUsername();
    this.reservationChambre.user = this.loadUserByTokenUsername();
    this.reservationChambre.beneficiaire = reservation.beneficiaire;
    this.reservationChambre.dateDebut = reservation.dateDebut;
    this.reservationChambre.dateFin = reservation.dateFin;
    this.reservationChambre.type = reservation.type;
  }

  private cloneReservationBungalow(reservation: Reservation) {
    this.loadUserByTokenUsername();
    this.reservationBungalow.user = this.loadUserByTokenUsername();
    this.reservationBungalow.beneficiaire = reservation.beneficiaire;
    this.reservationBungalow.dateDebut = reservation.dateDebut;
    this.reservationBungalow.dateFin = reservation.dateFin;
    this.reservationBungalow.type = reservation.type;
  }


  private loadUserByTokenUsername(): Adherent {
    const username = this.token.getUsername();
    // return this.adherentService.find(username);
    let adherent = new Adherent();
    adherent.username = username;
    return adherent;

  }

  //  Getters && Setters
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
