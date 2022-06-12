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

  private urlPath = "http://localhost:8036/api/v1/adherent";

  private _reservation: Reservation;
  private _reservationChambre: ReservationChambre;
  private _reservationBungalow: ReservationBungalow;
  private _reservationChambres: Array<ReservationChambre>;
  private _reservationBungalows: Array<ReservationBungalow>;
  private _reservations: Array<Reservation>;
  public error: boolean | false;
  private _count= 0;

  constructor(private http: HttpClient,
              private adherentService: AdherentService,
              private token: TokenService) {
  }

// Demande de reservation chambre
  public demandeReservationChambre() {
    return this.http.post<number>(`${this.urlPath}/reservation-chambre/demandeReservation/`, this.reservationChambre).subscribe(
      data => {
        if (data < 0) {
          this.error = true;
        } else this.error = false;
      }, error => {
        this.error = true;
        console.log(error)
      }
    );
  }

// Demande de reservation bungalow
  public demandeReservationBungalow() {
    return this.http.post<number>(`${this.urlPath}/reservation-bungalow/demandeReservation/`, this.reservationBungalow).subscribe(
      data => {
        if (data < 0) {
          this.error = true;
        } else this.error = false;
      }, error => {
        this.error = true;
        console.log(error)
      }
    );
  }

  // get Reservations chambre d'un adherent by email
  public getReservationChambres(email: string): Array<ReservationChambre> {
    this.http.get<Array<ReservationChambre>>(`${this.urlPath}/reservation-chambre/email/${email}`).subscribe(
      data => {
        this.reservationChambres = data
      this._count = this._count+ this.reservationChambres.length;
      }, error => {
        console.log(error)
      }
    );
    return this.reservationChambres;
  }

  public allReservationChambresAdherent() {
    const tokenDecoded = this.token.decode();
    const username = tokenDecoded.sub;
    this.getReservationChambres(username);
  }

  // get Reservations bungalow d'un adherent by email
  private getReservationBungalows(email: string): Array<ReservationBungalow> {
    this.http.get<Array<ReservationBungalow>>(`${this.urlPath}/reservation-bungalow/email/${email}`).subscribe(
      data => {
        this.reservationBungalows = data
        this._count = 3;
      }, error => {
        console.log(error)
      }
    );
    return this.reservationBungalows;
  }

  public allReservationBungalowAdherent() {
    const tokenDecoded = this.token.decode();
    const username = tokenDecoded.sub;
    this.getReservationBungalows(username);
  }

// Getters && Setters
  get reservation(): Reservation {
    if (this._reservation == null) {
      return this._reservation = new Reservation();
    }
    return this._reservation;
  }

  set reservation(value: Reservation) {
    this._reservation = value;
  }

  get reservationChambres(): Array<ReservationChambre> {
    if (this._reservationChambres == null) {
      return this._reservationChambres = new Array<ReservationChambre>();
    }
    return this._reservationChambres;
  }

  set reservationChambres(value: Array<ReservationChambre>) {
    this._reservationChambres = value;
  }

  get reservationBungalows(): Array<ReservationBungalow> {
    if (this._reservationBungalows == null) {
      return this._reservationBungalows = new Array<ReservationBungalow>();
    }
    return this._reservationBungalows;
  }

  set reservationBungalows(value: Array<ReservationBungalow>) {
    this._reservationBungalows = value;
  }

  get reservations(): Array<Reservation> {
    if (this._reservations == null) {
      return this._reservations = new Array<Reservation>();
    }
    return this._reservations;
  }

  set reservations(value: Array<Reservation>) {
    this._reservations = value;
  }

  get adherent(): Adherent {
    return this.adherentService.adherent;
  }

  get reservationChambre(): ReservationChambre {
    if (this._reservationChambre == null) {
      return this._reservationChambre = new ReservationChambre();
    }
    return this._reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this._reservationChambre = value;
  }

  get reservationBungalow(): ReservationBungalow {
    if (this._reservationBungalow == null) {
      return this._reservationBungalow = new ReservationBungalow();
    }
    return this._reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this._reservationBungalow = value;
  }

  get count(): number {
    return this._count;
  }
}
