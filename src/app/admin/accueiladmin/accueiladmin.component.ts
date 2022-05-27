import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.component.html',
  styleUrls: ['./accueiladmin.component.scss']
})
export class AccueiladminComponent implements OnInit {

  constructor(private adminservice:AdminService) { }


  ngOnInit(): void {
  }

}
