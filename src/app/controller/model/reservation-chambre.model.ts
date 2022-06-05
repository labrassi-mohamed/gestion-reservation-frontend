import {Adherent} from "./adherent.model";
import {Chambre} from "./chambre.model";

export class ReservationChambre {
  public id?: number;
  public code:string;
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
  public dateDebutHelp:string;
  public dateFinHelp:string;
  public chambre:Chambre;

}
