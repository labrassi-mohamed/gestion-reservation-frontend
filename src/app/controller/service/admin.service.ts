import {Injectable} from '@angular/core';
import {Reservation} from "../model/reservation.model";
import {HttpClient} from "@angular/common/http";
import {Adherent} from "../model/adherent.model";
import {Bungalow} from "../model/bungalow.model";
import {Chambre} from "../model/chambre.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private _reservation: Reservation;
  private _reservations: Array<Reservation>;
  private _chambre: Chambre;
  private _chambres: Array<Chambre>;
  private _bungalow: Bungalow;
  private _bungalows: Array<Bungalow>;
  private _adherents: Array<Adherent>;
  private _adherent: Adherent;
  private urladmin = 'http://localhost:8090/api/v1/admin';

  constructor(private http: HttpClient) {}

  findByreservationenattente() {
    this.http.get<Array<Reservation>>(this.urladmin + '/reservation/false/false/').subscribe(
      data => {
        this.reservations = data;
        console.log('good');
        console.log(this._reservations);
      }
      , error => {
        console.log('error');
      })
  }

  findallreservation() {
    this.http.get<Array<Reservation>>(this.urladmin + '/reservation/').subscribe(
      data => {
        this.reservations = data;
        console.log('reservation');
        console.log(this.reservations);
      }
      , error => {
        console.log('error');
      })
  }

  findallchambres() {
    this.http.get<Array<Chambre>>(this.urladmin + '/chambre/').subscribe(
      data => {
        this._chambres = data;
        console.log('good');
        console.log(data);
      }
      , error => {
        console.log('error');
      })
  }


  findallbungalows() {
    this.http.get<Array<Bungalow>>(this.urladmin + '/bungalow/').subscribe(
      data => {
        this._bungalows = data;
        console.log('good');
        console.log(data);
      }
      , error => {
        console.log('error');
      })
  }


  confirmerReservation(reservation: Reservation) {
    this.http.put<number>(this.urladmin + '/reservation/confirmerReservation/', reservation).subscribe(
      data => {
        console.log('good');
        console.log(data);
        this.findByreservationenattente();

      }
      , error => {
        console.log('error');
      })
  }

  annulerReservation(reservation: Reservation) {
    this.http.put<number>(this.urladmin + '/reservation/annulerReservation/', reservation).subscribe(
      data => {
        console.log('good');
        console.log(data);
        this.findByreservationenattente();

      }
      , error => {
        console.log('error');
      })
  }

  findByreservationactuelle() {
    this.http.get<Array<Reservation>>(this.urladmin + '/reservation/reservationActuelle').subscribe(
      data => {
        this.reservations = data;
        console.log(this.reservations);
      }
      , error => {
        console.log('error');
      })
  }

  deleteChambre(reference: string) {
    this.http.delete<number>(this.urladmin + '/chambre/' + reference).subscribe(
      data => {
        console.log(data);
        console.log(reference + ' was deleted');
        this.findallchambres();
      }
      , error => {
        console.log('error');
      })
  }

  deleteBungalow(reference: string) {
    this.http.delete<number>(this.urladmin + '/bungalow/' + reference).subscribe(
      data => {
        console.log(data);
        console.log(reference + ' was deleted');
        this.findallbungalows();
      }
      , error => {
        console.log('error');
      })
  }

  imprimerReservation() {
    this.http.get<string>(this.urladmin + '/reservation/export/').subscribe(
      data => {
        console.log(data);
        console.log('data was dowloaded')
      }
      , error => {
        console.log('error');
      })
  }

  findAllAdherent() {

  }

  deleteAdherent(adherent: Adherent) {

  }

  ShowReservationByAtherent() {

  }

  saveChambre() {
    this.http.post<number>(this.urladmin + '/chambre/save', this._chambre).subscribe(
      data => {
        if (data > 0) {
          console.log(data);
          console.log(this._chambre);
          console.log('Chambre saved');
          this.findallchambres();
        } else {
          console.log('Erreur lors de la creation du code : ' + data);
        }
      }
      , error => {
        console.log('error');
      })
  }


  saveBungalow() {
    this.http.post<number>(this.urladmin + '/bungalow/save', this._bungalow).subscribe(
      data => {
        if (data > 0) {
          console.log(data);
          console.log('Bungalow saved');
          this.findallbungalows();
        } else {
          console.log('Erreur lors de la creation du code : ' + data);
        }
      }
      , error => {
        console.log('error');
      })
  }

  findByreservationancienne() {
    this.http.get<Array<Reservation>>(this.urladmin + '/reservation/reservationAncienne').subscribe(
      data => {
        this.reservations = data;
        console.log(this.reservations);
      }
      , error => {
        console.log('error');
      })
  }

  // Getters & Setters
  get adherent(): Adherent {
    if (this._adherent == null) {
      this._adherent = new Adherent();
    }
    return this._adherent;
  }

  set adherent(value: Adherent) {
    this._adherent = value;
  }

  get adherents(): Array<Adherent> {
    if (this._adherents == null) {
      this._adherents = new Array<Adherent>();
    }
    return this._adherents;
  }

  set adherents(value: Array<Adherent>) {
    this._adherents = value;
  }

  get bungalows(): Array<Bungalow> {
    if (this._bungalows == null) {
      this._bungalows = new Array<Bungalow>();
    }
    return this._bungalows;
  }

  set bungalows(value: Array<Bungalow>) {
    this._bungalows = value;
  }

  get bungalow(): Bungalow {
    if (this._bungalow == null) {
      this._bungalow = new Bungalow();
    }
    return this._bungalow;
  }

  set bungalow(value: Bungalow) {
    this._bungalow = value;
  }

  get chambres(): Array<Chambre> {
    if (this._chambres == null) {
      this._chambres = new Array<Chambre>();
    }
    return this._chambres;
  }

  set chambres(value: Array<Chambre>) {
    this._chambres = value;
  }

  get chambre(): Chambre {
    if (this._chambre == null) {
      this._chambre = new Chambre();
    }
    return this._chambre;
  }

  set chambre(value: Chambre) {
    this._chambre = value;
  }

  get reservations(): Array<Reservation> {
    if (this._reservations == null) {
      this._reservations = new Array<Reservation>();
    }
    return this._reservations;
  }

  set reservations(value: Array<Reservation>) {
    this._reservations = value;
  }

  get reservation(): Reservation {
    if (this._reservation == null) {
      this._reservation = new Reservation();
    }
    return this._reservation;
  }

  set reservation(value: Reservation) {
    this._reservation = value;
  }
}
