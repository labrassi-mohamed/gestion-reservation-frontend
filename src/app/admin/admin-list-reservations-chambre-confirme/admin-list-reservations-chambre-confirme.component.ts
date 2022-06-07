import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ReservationBungalow} from "../../controller/model/reservation-bungalow.model";
import {AdminService} from "../../controller/service/admin.service";
import {MatPaginator} from "@angular/material/paginator";
import {ReservationChambre} from "../../controller/model/reservation-chambre.model";

@Component({
  selector: 'app-admin-list-reservations-chambre-confirme',
  templateUrl: './admin-list-reservations-chambre-confirme.component.html',
  styleUrls: ['./admin-list-reservations-chambre-confirme.component.css']
})
export class AdminListReservationsChambreConfirmeComponent implements OnInit {

  displayedColumns: string[] = ['code', 'chambre', 'dateDebut', 'dateFin', 'annuler'];
  dataSource = new MatTableDataSource<ReservationChambre>(this.reservationChambres);


  constructor(private adminService: AdminService) {
  }


  get reservationChambre(): ReservationChambre {
    return this.adminService.reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this.adminService.reservationChambre = value;
  }

  get reservationChambres(): Array<ReservationChambre> {

    return this.adminService.reservationChambres;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.adminService.findByReservationChambreConfirme()
  }

}
