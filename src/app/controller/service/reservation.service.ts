import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../model/reservation.model";
import {Registration} from "../model/registration.model";
import {TokenService} from "./token.service";
import {AuthService} from "../auth/auth.service";
import {AdherentService} from "./adherent.service";
import {Adherent} from "../model/adherent.model";
import {Observable} from "rxjs";
import {ReservationChambre} from "../model/reservation-chambre.model";
import {ReservationBungalow} from "../model/reservation-bungalow.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlPath = "http://localhost:8036//api/v1/adherent/";

  private _reservation: Reservation;
  private _reservationChambre: ReservationChambre;
  private _reservationBungalow: ReservationBungalow;
  private _reservations: Reservation[];
  private _adherent: Adherent;

  constructor(private http: HttpClient,
              private adherentService: AdherentService,
              private token: TokenService) {
  }

  public demandeReservationChambre() {
    return this.http.post<number>(`${this.urlPath}/reservation-chambre/demandeReservation/`, this.reservationChambre).subscribe(
      data => {
        console.log(data)
        console.log("good")
      }, error => {
        alert(error)
        console.log(error)
      }
    );
  }

  public demandeReservationBungalow() {
    return this.http.post<number>(`${this.urlPath}/reservation-bungalow/demandeReservation/`, this.reservationBungalow).subscribe(
      data => {
        console.log(data)
        console.log("good")
      }, error => {
        alert(error)
        console.log(error)
      }
    );
  }

  public getReservations(email: string){
    return this.http.get<Array<Reservation>>(`${this.urlPath}/{email}`).subscribe(
      data => {
        console.log(this._reservations = data)
      }, error => {
        console.log(error)
      }
    );
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

  get reservations(): Reservation[] {
    return this._reservations;
  }

  get adherent(): Adherent {
    return this.adherentService.adherent;
  }

  get reservationChambre(): ReservationChambre {
    if (this._reservationChambre == null) {
      return this._reservationChambre= new ReservationChambre();
    }
    return this._reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this._reservationChambre = value;
  }

  get reservationBungalow(): ReservationBungalow {
    if (this._reservationBungalow == null) {
      return this._reservationBungalow= new ReservationBungalow();
    }
    return this._reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this._reservationBungalow = value;
  }
}
