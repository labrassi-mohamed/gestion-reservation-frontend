import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ReservationBungalow} from "../../controller/model/reservation-bungalow.model";
import {AdminService} from "../../controller/service/admin.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-list-reservations-bungalow-confirme',
  templateUrl: './admin-list-reservations-bungalow-confirme.component.html',
  styleUrls: ['./admin-list-reservations-bungalow-confirme.component.css']
})
export class AdminListReservationsBungalowConfirmeComponent implements OnInit {


  displayedColumns: string[] = ['code','bungalow', 'dateDebut', 'dateFin','annuler'];
  dataSource = new MatTableDataSource<ReservationBungalow>(this.reservationBungalows);



  constructor(private adminService: AdminService) {
  }


  get reservationBungalow(): ReservationBungalow {

    return this.adminService.reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this.adminService.reservationBungalow = value;
  }

  get reservationBungalows(): Array<ReservationBungalow> {

    return this.adminService.reservationBungalows;
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.adminService.findByReservationBungalowConfirme()
  }






}

