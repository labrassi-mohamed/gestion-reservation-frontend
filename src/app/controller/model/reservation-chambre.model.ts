import {Adherent} from "./adherent.model";
import {Chambre} from "./chambre.model";
import {Reservation} from "./reservation.model";

export class ReservationChambre {
  public id?: number;
  public code:string;
  public username: string;
  public beneficiaire: string;
  public type: string;
  public dateDebut: Date;
  public dateDebutP: Date;
  public dateFin: Date;
  public dateFinP: Date;
  public createdAt: Date;
  public confirmation: boolean;
  public reject: boolean;
  public confirmationP: boolean;
  public user: Adherent;
  public dateDebutHelp: string;
  public dateFinHelp: string;
  public chambre: Chambre;

}
