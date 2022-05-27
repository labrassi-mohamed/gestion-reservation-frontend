import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../controller/service/reservation.service";
import {Reservation} from "../../controller/model/reservation.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private service: ReservationService ) {}

  ngOnInit(): void {
  }

  onRegister(reservationForm: NgForm){

  }

  demandeReservation(){
    this.service.demandeReservation().subscribe(
      data =>{
          console.log(data)
      }, error => {
        console.log('error')
      }
    )
  }

//  Getters
  get reservation(): Reservation {
    return this.service.reservation;
  }

}
