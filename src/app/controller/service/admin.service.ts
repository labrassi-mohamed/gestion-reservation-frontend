import {Injectable} from '@angular/core';
import {Reservation} from "../model/reservation.model";
import {HttpClient} from "@angular/common/http";
import {Adherent} from "../model/adherent.model";
import {Bungalow} from "../model/bungalow.model";
import {Chambre} from "../model/chambre.model";
import {ReservationChambre} from "../model/reservation-chambre.model";
import {ReservationBungalow} from "../model/reservation-bungalow.model";
import {Logement} from "../model/logement.model";
import {ChambreLibre} from "../model/chambre-libre.model";
import {BungalowLibre} from "../model/bungalow-libre.model";
import {Count} from "../model/count.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private _reservation: Reservation;
  private _reservations: Array<Reservation>;
  private _reservationChambre: ReservationChambre;
  private _reservationChambres: Array<ReservationChambre>;
  private _reservationBungalow: ReservationBungalow;
  private _reservationBungalows: Array<ReservationBungalow>;
  private _chambre: Chambre;
  private _chambres: Array<Chambre>;
  private _bungalow: Bungalow;
  private _bungalows: Array<Bungalow>;
  private _adherents: Array<Adherent>;
  private _adherent: Adherent;
  private _logement: Logement;
  private _chambreLibre: ChambreLibre;
  private _chambreLibres: Array<ChambreLibre>;
  private _bungalowLibre: ChambreLibre;
  private _bungalowLibres: Array<BungalowLibre>;
  private urladmin = 'http://localhost:8036/api/v1/admin';
  private _count: Count;

  constructor(private http: HttpClient) {
  }

  findByreservationenattente() {
    this.http.get<Array<Reservation>>(this.urladmin + '/reservation/findAllByConfirmation/false').subscribe(
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


  rejectReservationBungalow(code: string) {

    this.http.put<number>(this.urladmin + '/reservationBungalow/rejectReservationBungalow/' + code, {}).subscribe(
      data => {
        console.log('reservation rejecte');
        console.log(data);
        this.findByReservationBungalowEnAttente();

      }
      , error => {
        console.log('error reject')
      }
    )
  }

  rejectReservationChambre(code: string) {

    this.http.put<number>(this.urladmin + '/reservationChambre/rejectReservationChambre/' + code, {}).subscribe(
      data => {
        console.log('reservation rejecte');
        console.log(data);
        this.findByReservationChambreEnAttente();

      }
      , error => {
        console.log('error reject')
      }
    )
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
    this.http.get<Array<Adherent>>(this.urladmin + '/adherent/').subscribe(
      data => {
        this._adherents = data;
        console.log('good adhernet');
        console.log(data);
      }
      , error => {
        console.log('error');
      })

  }

  deleteAdherent(adherent: Adherent) {

  }


  findchambresDisponible(dateDebut: string, dateFin: string) {

    this.http.get<Array<Chambre>>(this.urladmin + '/chambre/ChambreDisponible/' + dateDebut + '/' + dateFin).subscribe(
      data => {
        this.chambres = data;
        console.log(this.chambres);
        console.log('gooood chambre dispo');
      }
      , error => {
        console.log('error');

      })
  }

  findchambresPropose(dateDebut: string, dateFin: string) {

    this.http.get<Array<ChambreLibre>>(this.urladmin + '/chambre/PropositionDisponible/' + dateDebut + '/' + dateFin).subscribe(
      data => {
        this.chambreLibres = data;
        console.log(this.chambreLibres);
        console.log('gooood chambre propose');
      }
      , error => {
        console.log('error');

      })
  }

  findbungalowPropose(dateDebut: string, dateFin: string) {

    this.http.get<Array<BungalowLibre>>(this.urladmin + '/bungalow/PropositionDisponible/' + dateDebut + '/' + dateFin).subscribe(
      data => {
        this.bungalowLibres = data;
        console.log(this.bungalowLibres);
        console.log('gooood bungalow propose');
      }
      , error => {
        console.log('error');

      })
  }

  findBungalowDisponible(dateDebut: string, dateFin: string) {

    this.http.get<Array<Bungalow>>(this.urladmin + '/bungalow/BungalowDisponible/' + dateDebut + '/' + dateFin).subscribe(
      data => {
        this.bungalows = data;
        console.log(this.bungalows);
        console.log('gooood bungalow dispo');
      }
      , error => {
        console.log('error');

      })
  }

  findByReservationChambreEnAttente() {
    this.http.get<Array<ReservationChambre>>(this.urladmin + '/reservationChambre/findByConfirmationAndReject/false/false').subscribe(
      data => {
        this.reservationChambres = data;
        console.log('good');
        console.log(this._reservationChambres);
      }
      , error => {
        console.log('error');
      })
  }

  findByReservationBungalowEnAttente() {
    this.http.get<Array<ReservationBungalow>>(this.urladmin + '/reservationBungalow/findByConfirmationAndReject/false/false').subscribe(
      data => {
        this.reservationBungalows = data;
        console.log('good');
        console.log(this._reservations);
      }
      , error => {
        console.log('error');
      })
  }

  confirmerReservationBungalow(code: string, numero: number) {
    this.http.put<number>(this.urladmin + '/reservationBungalow/confirmerReservationBungalow/' + code + '/' + numero, {}).subscribe(
      data => {
        console.log('good confirmation reservation bungalow');
        console.log(data);
        console.log(code);
        this.findByReservationBungalowEnAttente();
      }
      , error => {
        console.log('error confirmation');
      })
  }

  confirmerReservationChambre(code: string, numero: number) {
    this.http.put<number>(this.urladmin + '/reservationChambre/confirmerReservationChambre/' + code + '/' + numero, {}).subscribe(
      data => {
        console.log('good confirmation reservation chambre');
        console.log(data);
        this.findchambresDisponible(this.reservationChambre.dateDebutHelp, this.reservationChambre.dateFinHelp);
        this.findByReservationChambreEnAttente();
      }
      , error => {
        console.log('error confirmation');
      })
  }

  AddNewChambre(chambre: Chambre) {
    this.http.post<number>(this.urladmin + '/chambre/save/', this._chambre).subscribe(
      data => {
        console.log('chambre addeed');
        console.log(data);
        this.findByReservationChambreEnAttente();
      }
      , error => {
        console.log('error add new chambre');
      })

  }

  AddNewBungalow(bungalow: Bungalow) {
    this.http.post<number>(this.urladmin + '/bungalow/save/', this._bungalow).subscribe(
      data => {
        console.log('bungalow addeed');
        console.log(data);
      }
      , error => {
        console.log('error add new bungalow');
      })
  }

  findAdherentReservations(adherent: Adherent) {

  }

  findByReservationBungalowConfirme() {

    this.http.get<Array<ReservationBungalow>>(this.urladmin + '/reservationBungalow/findByConfirmationAndReject/true/false').subscribe(
      data => {
        this.reservationBungalows = data;
        console.log('good reservation confirmer');
        console.log(this._reservations);
      }
      , error => {
        console.log('error');
      })
  }

  findByReservationChambreConfirme() {
    this.http.get<Array<ReservationChambre>>(this.urladmin + '/reservationChambre/findByConfirmationAndReject/true/false').subscribe(
      data => {
        this.reservationChambres = data;
        console.log('good Reservation chambre confirme');
        console.log(this._reservationChambres);
      }
      , error => {
        console.log('error');
      })
  }


  proposeReservationChambre(numero: number) {
    this.http.put<number>(this.urladmin + '/reservationChambre/proposeReservation/' + numero + '/', this._reservationChambre).subscribe(
      data => {
        console.log('good proposition reservation chambre');
        console.log(data);
        this.findchambresPropose(this.reservationChambre.dateDebutHelp, this.reservationChambre.dateFinHelp);
        this.findByReservationChambreEnAttente();
      }
      , error => {
        console.log('error proposition');
      })

  }

  proposeReservationBungalow(numero: number) {
    this.http.put<number>(this.urladmin + '/reservationBungalow/proposeReservation/' + numero + '/', this._reservationBungalow).subscribe(
      data => {
        console.log('good proposition reservation bungalow');
        console.log(data);
        this.findbungalowPropose(this.reservationBungalow.dateDebutHelp, this.reservationBungalow.dateFinHelp);
        this.findByReservationBungalowEnAttente();
      }
      , error => {
        console.log('error proposition');
      })

  }

  countReservation() {
    this.http.get<number>(this.urladmin + '/reservationChambre/countReservation/').subscribe(
      data => {
        console.log('count : ' + data);
        this.count.reservations = data;
        console.log(this.count.reservations)
      }
      , error => {
        console.log('error countRes');
      })
  }

  // Getters & Setters//


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

  get reservationChambre(): ReservationChambre {
    if (this._reservationChambre == null) {
      this._reservationChambre = new ReservationChambre();
    }
    return this._reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this._reservationChambre = value;
  }

  get reservationChambres(): Array<ReservationChambre> {

    if (this._reservationChambres == null) {
      this._reservationChambres = new Array<ReservationChambre>();
    }
    return this._reservationChambres;
  }

  set reservationChambres(value: Array<ReservationChambre>) {
    this._reservationChambres = value;
  }

  get reservationBungalow(): ReservationBungalow {

    if (this._reservationBungalow == null) {
      this._reservationBungalow = new ReservationBungalow();
    }
    return this._reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this._reservationBungalow = value;
  }

  get reservationBungalows(): Array<ReservationBungalow> {

    if (this._reservationBungalows == null) {
      this._reservationBungalows = new Array<ReservationBungalow>();
    }
    return this._reservationBungalows;
  }

  set reservationBungalows(value: Array<ReservationBungalow>) {
    this._reservationBungalows = value;
  }


  get logement(): Logement {
    if (this._logement == null) {
      this._logement = new Logement();
    }
    return this._logement;
  }

  set logement(value: Logement) {
    this._logement = value;
  }

  get chambreLibre(): ChambreLibre {
    if (this._chambreLibre == null) {
      this._chambreLibre = new ChambreLibre();
    }
    return this._chambreLibre;
  }

  set chambreLibre(value: ChambreLibre) {
    this._chambreLibre = value;
  }

  get chambreLibres(): Array<ChambreLibre> {
    if (this._chambreLibres == null) {
      this._chambreLibres = new Array<ChambreLibre>();
    }
    return this._chambreLibres;
  }

  set chambreLibres(value: Array<ChambreLibre>) {
    this._chambreLibres = value;
  }


  get bungalowLibre(): ChambreLibre {
    if (this._bungalowLibre == null) {
      this._bungalowLibre = new ChambreLibre();
    }
    return this._bungalowLibre;
  }

  set bungalowLibre(value: ChambreLibre) {
    this._bungalowLibre = value;
  }


  get bungalowLibres(): Array<BungalowLibre> {
    if (this._bungalowLibres == null) {
      this._bungalowLibres = new Array<BungalowLibre>();
    }
    return this._bungalowLibres;
  }

  set bungalowLibres(value: Array<BungalowLibre>) {
    this._bungalowLibres = value;
  }


  get count(): Count {
    if(this._count==null){
      this._count=new Count();
    }
    return this._count;
  }

  set count(value: Count) {
    if(this._count==null){
      this._count=new Count();
    }
    this._count = value;
  }


}
