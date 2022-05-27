import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Bungalow} from "../../../controller/model/bungalow.model";

@Component({
  selector: 'app-admin-creat-new-bungalow',
  templateUrl: './admin-creat-new-bungalow.component.html',
  styleUrls: ['./admin-creat-new-bungalow.component.css']
})
export class AdminCreatNewBungalowComponent implements OnInit {

  constructor(private adminService :AdminService) { }

  get bungalow(): Bungalow {

    return this.adminService.bungalow;
  }
  ngOnInit(): void {
  }

  saveBungalow() {
    this.adminService.saveBungalow();
  }
}
