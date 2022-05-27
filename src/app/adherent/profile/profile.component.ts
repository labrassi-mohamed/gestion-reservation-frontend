import { Component, OnInit } from '@angular/core';
import {Adherent} from "../../controller/model/adherent.model";
import {AdherentService} from "../../controller/service/adherent.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public adherentObject : Adherent = null;

  constructor(private adherent: AdherentService) { }

  ngOnInit(): void {
  }

  findByEmail(email){
    this.adherent.findByEmail(email).subscribe(
      data =>{
        this.adherentObject = data
      }
    )
  }

}
