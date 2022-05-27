import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Chambre} from "../../../controller/model/chambre.model";
import {AdminListReservationsEnAttenteComponent} from "../admin-list-reservations-en-attente.component";

@Component({
  selector: 'app-admin-list-disponible-chambre',
  templateUrl: './admin-list-disponible-chambre.component.html',
  styleUrls: ['./admin-list-disponible-chambre.component.scss']
})
export class AdminListDisponibleChambreComponent implements OnInit {


  constructor(private adminService: AdminService,private adminlistenatente:AdminListReservationsEnAttenteComponent) {
  }
  get chambres(): Array<Chambre> {

    return this.adminService.chambres;
  }

  displayedColumns: string[] = ['numero','espace', 'capacity','description', 'prix','confirmer','calender'];
  date10: any;

  ngOnInit(): void {
    this.adminService.findallchambres()
  }

  chambrevar(chambre:Chambre) {
    this.adminlistenatente.chambrevar(chambre);
  }
}
