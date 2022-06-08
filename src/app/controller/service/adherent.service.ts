import {Injectable} from '@angular/core';
import {Adherent} from "../model/adherent.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private url = 'http://localhost:8036/api/v1/adherent/user';

  private _adherent: Adherent;
  private _adherents: Array<Adherent>;
  private _currentUser: Adherent;
  private _currentUser2: Adherent;

  constructor(private http: HttpClient) {
  }

  findByUsername(username: string): any {
    return this.http.get<Adherent>(`${this.url}/username/${username}`).subscribe(
      data => {
        this.adherent = data
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  find(username: string): Adherent {
    this.http.get<Adherent>(`${this.url}/username/${username}`).subscribe(
      data => {
        this._currentUser2 = data
        console.log(this._currentUser2);
      }, error => {
        console.log(error);
      }
    );
    return this._currentUser2;
  }

  findCurrentUser(username: string): Adherent {
     this.http.get<Array<Adherent>>(`${this.url}/get-all`).subscribe(
      data => {
        this.adherents = data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].username == username) {
              this._currentUser = data[i];
          }
        }
        console.log(this._currentUser);
      }, error => {
        console.log(error);
      }
    );
     return this._currentUser;
  }

// getters
  get adherent(): Adherent {
    if (this._adherent == null) {
      return this._adherent = new Adherent();
    }
    return this._adherent;
  }

  set adherent(value: Adherent) {
    this._adherent = value;
  }

  set adherents(value: Array<Adherent>) {
    this._adherents = value;
  }

  get adherents(): Array<Adherent> {
    if (this._adherents == null) {
      return this._adherents = new Array<Adherent>();
    }
    return this._adherents;
  }
}
