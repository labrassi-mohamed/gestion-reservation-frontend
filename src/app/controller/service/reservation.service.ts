import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../model/reservation.model";
import {Registration} from "../model/registration.model";
import {TokenService} from "./token.service";
import {AuthService} from "../auth/auth.service";
import {AdherentService} from "./adherent.service";
import {Adherent} from "../model/adherent.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlPath = "http://localhost:8036/api/v1/adherent/reservation";

  private _reservation: Reservation;
  private _adherent: Adherent;

  constructor(private http: HttpClient,
              private adherentService: AdherentService,
              private token: TokenService) {
  }

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

  set reservation(value: Reservation) {
    this._reservation = value;
  }

  get adherent(): Adherent {
    return this.adherentService.adherent;
  }

}
