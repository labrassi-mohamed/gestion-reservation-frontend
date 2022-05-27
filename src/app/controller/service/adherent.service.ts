import { Injectable } from '@angular/core';
import {Login} from "../model/login.model";
import {Adherent} from "../model/adherent.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private  url='http://localhost:8090/api/v1/adherent';

  private _login: Login;

  private adherent: Adherent;

  constructor(private http: HttpClient) {
  }

  findByEmail(email){
    return this.http.get<Adherent>(`${this.url}/find/${email}`)
  }


// getters
  get login(): Login {
    if (this._login == null) {
      return this._login = new Login();
    }
    return this._login;
  }
}
