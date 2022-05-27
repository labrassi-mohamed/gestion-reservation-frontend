import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Reservation} from "../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Adherent} from "../../controller/model/adherent.model";

@Component({
  selector: 'app-admin-list-adherents',
  templateUrl: './admin-list-adherents.component.html',
  styleUrls: ['./admin-list-adherents.component.css']
})
export class AdminListAdherentsComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }


  displayedColumns: string[] = ['nom', 'prenom', 'email', 'ppr','createdat','delete','reservation'];
  dataSource = new MatTableDataSource<Adherent>(this.adherents);
  // dataSource = this.reservations;
  // dataSource = this.adminService.reservations;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.findAllAdherent()
  }


  delete(adherent:Adherent) {
    this.adminService.deleteAdherent(adherent);

  }

  imprimerReservation() {
    this.adminService.imprimerReservation();
  }

  ShowReservationByAtherent(element) {
    this.adminService.ShowReservationByAtherent();

  }

  // Getters
  get adherents(): Array<Adherent> {
    return this.adminService.adherents;
  }
}
