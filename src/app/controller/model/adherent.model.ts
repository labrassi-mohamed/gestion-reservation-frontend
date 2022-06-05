import {Reservation} from "./reservation.model";

export class Adherent {
  public id?: number;
  public lastname: string;
  public firstname: string;
  public email: string;
  public telephone: string;
  public username: string;
  public password?: string;
  public reservation: Reservation;
  public authorities: any [];
}
