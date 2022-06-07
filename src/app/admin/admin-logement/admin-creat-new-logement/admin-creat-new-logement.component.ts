import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Logement} from "../../../controller/model/logement.model";
import {Bungalow} from "../../../controller/model/bungalow.model";
import {Chambre} from "../../../controller/model/chambre.model";

@Component({
  selector: 'app-admin-creat-new-logement',
  templateUrl: './admin-creat-new-logement.component.html',
  styleUrls: ['./admin-creat-new-logement.component.scss']
})
export class AdminCreatNewLogementComponent implements OnInit {

  constructor(private adminService:AdminService) { }


  get logement(): Logement {
    return this.adminService.logement;
  }

  get bungalow(): Bungalow {

    return this.adminService.bungalow;
  }

  set bungalow(value: Bungalow) {
    this.adminService.bungalow = value;
  }


  get chambre(): Chambre {

    return this.adminService.chambre;
  }

  set chambre(value: Chambre) {
    this.adminService.chambre = value;
  }

  ngOnInit(): void {
  }

  AddLogement() {
    if (this.logement.typelogement === "chambre"){
      this.cloneChambre(this.logement);
      this.adminService.AddNewChambre(this.chambre);
    }else if (this.logement.typelogement === "bungalow"){
      this.cloneBungalow(this.logement);
      this.adminService.AddNewBungalow(this.bungalow);
    }
  }

  cloneChambre(logement:Logement){
    this.chambre.numero=logement.numero;
    this.chambre.prix=logement.prix;
    this.chambre.capacity=logement.capacity;
    this.chambre.description=logement.description;
    this.chambre.espace=logement.espace;
  }

  cloneBungalow(logement:Logement){
    this.bungalow.numero=logement.numero;
    this.bungalow.prix=logement.prix;
    this.bungalow.capacity=logement.capacity;
    this.bungalow.description=logement.description;
    this.bungalow.espace=logement.espace;
  }
}
