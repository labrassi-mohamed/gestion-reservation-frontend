import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Reservation} from "../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-reservations-historique',
  templateUrl: './admin-reservations-historique.component.html',
  styleUrls: ['./admin-reservations-historique.component.css']
})
export class AdminReservationsHistoriqueComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }

  get reservations(): Array<Reservation> {
    return this.adminService.reservations;
  }

  displayedColumns: string[] = ['email', 'type', 'dateDebut', 'dateFin','Annuler'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);
  // dataSource = this.reservations;
  // dataSource = this.adminService.reservations;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.findByreservationancienne()
  }


  annuler(reservation:Reservation) {
    this.adminService.annulerReservation(reservation);

  }

  imprimerReservation() {
    this.adminService.imprimerReservation();
  }
}
