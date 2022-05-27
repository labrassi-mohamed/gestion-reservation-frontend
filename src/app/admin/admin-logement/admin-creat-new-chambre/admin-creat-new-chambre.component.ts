import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Chambre} from "../../../controller/model/chambre.model";

@Component({
  selector: 'app-admin-creat-new-chambre',
  templateUrl: './admin-creat-new-chambre.component.html',
  styleUrls: ['./admin-creat-new-chambre.component.css']
})
export class AdminCreatNewChambreComponent implements OnInit {

  constructor(private adminService :AdminService) { }


  get chambre(): Chambre {

    return this.adminService.chambre;
  }


  ngOnInit(): void {
  }

  saveChambre() {
    this.adminService.saveChambre();
  }
}
