import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../model/reservation.model";
import {Registration} from "../model/registration.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlPath = "http://localhost:8036/api/v1/adherent/reservation";

  private _reservation: Reservation;

  constructor(private http: HttpClient) { }

  public demandeReservation() {
    return this.http.post<number>(`${this.urlPath}/`, this.reservation);
  }

// Getters
  get reservation(): Reservation {
    if (this._reservation == null) {
      return this._reservation = new Reservation();
    }
    return this._reservation;
  }
}
