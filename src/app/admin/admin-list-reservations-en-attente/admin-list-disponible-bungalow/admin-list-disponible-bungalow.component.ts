import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Bungalow} from "../../../controller/model/bungalow.model";

@Component({
  selector: 'app-admin-list-disponible-bungalow',
  templateUrl: './admin-list-disponible-bungalow.component.html',
  styleUrls: ['./admin-list-disponible-bungalow.component.css']
})
export class AdminListDisponibleBungalowComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }
  get bungalows(): Array<Bungalow> {

    return this.adminService.bungalows;
  }

  displayedColumns: string[] = ['numero','espace', 'capacity','description', 'prix'];

  ngOnInit(): void {
    this.adminService.findallbungalows()
  }

}
