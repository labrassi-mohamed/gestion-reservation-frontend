import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Count} from "../../../controller/model/count.model";

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit {

  get count(): Count {
    return this.adminService.count;
  }
  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.adminService.countReservation();
    console.log(this.adminService.count.reservations+'  hhhhhhhhhhhhh');


  }

}
