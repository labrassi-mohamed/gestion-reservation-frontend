import {Adherent} from "./adherent.model";
import {Bungalow} from "./bungalow.model";
import {Reservation} from "./reservation.model";

export class ReservationBungalow {
  public id?: number;
  public username: string;
  public beneficiaire: string;
  public type: string;
  public dateDebut: Date;
  public dateDebutP: Date;
  public dateFin: Date;
  public dateFinP: Date;
  public createdDate: Date;
  public confirmation: boolean;
  public reject: boolean;
  public confirmationP: boolean;
  public adherent: Adherent;
  public dateDebutHelp: string;
  public dateFinHelp: string;
  public code: string;
  public bungalow: Bungalow;

}
