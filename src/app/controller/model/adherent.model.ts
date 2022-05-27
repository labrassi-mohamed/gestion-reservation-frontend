import {Reservation} from "./reservation.model";

export class Adherent {
  public id?: number;
  public nom: string;
  public prenom: string;
  public email: string;
  public password?: string;
  public reservation: Reservation;
}
