import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Reservation} from "../../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Adherent} from "../../../controller/model/adherent.model";

@Component({
  selector: 'app-admin-reservations-adherent',
  templateUrl: './admin-reservations-adherent.component.html',
  styleUrls: ['./admin-reservations-adherent.component.css'],

})
export class AdminReservationsAdherentComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }

  get reservations(): Array<Reservation> {
    return this.adminService.reservations;
  }
  get adherent(): Adherent {
    return this.adminService.adherent;
  }

  displayedColumns: string[] = ['type', 'dateDebut', 'dateFin'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);
  // dataSource = this.reservations;
  // dataSource = this.adminService.reservations;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.findAdherentReservations(this.adherent)
  }


}
