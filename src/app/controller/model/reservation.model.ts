import {Adherent} from "./adherent.model";

export class Reservation {
  public id?: number;
  public email: string;
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

}
