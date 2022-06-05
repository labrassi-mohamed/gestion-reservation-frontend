import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../controller/service/reservation.service";
import {Reservation} from "../../controller/model/reservation.model";
import {NgForm} from "@angular/forms";
import {AdherentService} from "../../controller/service/adherent.service";
import {TokenService} from "../../controller/service/token.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  constructor(private _service: ReservationService,
              private adherentService: AdherentService,
              private token: TokenService) {
  }

  ngOnInit(): void {
  }

  onRegister(reservationForm: NgForm) {
    console.log(reservationForm.value)
  }

  demandeReservation() {
    console.log(this.adherentService.adherent)
    this._service.demandeReservation().subscribe(
      data => {
        console.log(data)
      }, error => {
        console.log(error.message)
      }
    )
  }

  //  Getters
  get reservation(): Reservation {
    return this._service.reservation;
  }

  set reservation(value: Reservation) {
    this._service.reservation = value;
  }
}
