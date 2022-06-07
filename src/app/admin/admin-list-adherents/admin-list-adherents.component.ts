import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Reservation} from "../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Adherent} from "../../controller/model/adherent.model";

@Component({
  selector: 'app-admin-list-adherents',
  templateUrl: './admin-list-adherents.component.html',
  styleUrls: ['./admin-list-adherents.component.css'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class AdminListAdherentsComponent implements OnInit {
  displayBasic:Boolean;

  constructor(private adminService: AdminService) {
  }


  displayedColumns: string[] = ['nom', 'prenom', 'email', 'ppr','createdat','delete','reservations'];
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

  ShowReservationByAdherent(adherent:Adherent) {

    this.adherent=adherent;
    this.displayBasic=true;

  }

  // Getters

  get adherents(): Array<Adherent> {
    return this.adminService.adherents;
  }

  get adherent(): Adherent {
    return this.adminService.adherent;
  }

  set adherent(value: Adherent) {
    this.adminService.adherent = value;
  }
}
