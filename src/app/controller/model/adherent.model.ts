import {Reservation} from "./reservation.model";
import {ReservationChambre} from "./reservation-chambre.model";
import {ReservationBungalow} from "./reservation-bungalow.model";

export class Adherent {
  public id?: number;
  public lastname: string;
  public firstname: string;
  public email: string;
  public telephone: string;
  public username: string;
  public password?: string;
  public reservationChambres: Array<ReservationChambre>;
  public reservationBungalows: Array<ReservationBungalow>;
  public authorities: any [];


  constructor() {
  }


}
