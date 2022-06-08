import {Adherent} from "./adherent.model";

export class Reservation {
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
  public user: Adherent;
  public dateDebutHelp: string;
  public dateFinHelp: string;
}
