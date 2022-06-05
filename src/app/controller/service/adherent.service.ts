import { Injectable } from '@angular/core';
import {Adherent} from "../model/adherent.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  private  url='http://localhost:8036/api/v1/adherent/user';

  private _adherent: Adherent;

  constructor(private http: HttpClient) {
  }

  findByUsername(username: string){
    return this.http.get<Adherent>(`${this.url}/username/${username}`).subscribe(
      data => {
        this._adherent = data
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

// getters
  get adherent() : Adherent {
    if (this._adherent == null) {
      return this._adherent = new Adherent();
    }
    return this._adherent;
  }


  set adherent(value: Adherent) {
    this._adherent = value;
  }
}
