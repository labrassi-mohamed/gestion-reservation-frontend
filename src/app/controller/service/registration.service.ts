import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registration} from "../model/registration.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private urlPath = "http://localhost:8036/api/v1/adherent/registration";

  private _registration: Registration;

  constructor(private http: HttpClient) {}

  public persist() {
    return this.http.post<number>(`${this.urlPath}/`, this.registration);
  }

  resetResgistration(){
    return this._registration= {
      email: "", nom: "", prenom: "", telephone: "", password: ""
    }
  }
  // Getters
  get registration(): Registration {
    if (this._registration == null) {
      return this._registration = new Registration();
    }
    return this._registration;
  }
}
