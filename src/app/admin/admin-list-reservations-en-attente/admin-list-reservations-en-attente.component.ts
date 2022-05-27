import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Reservation} from "../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {Chambre} from "../../controller/model/chambre.model";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-list-reservations-en-attente',
  templateUrl: './admin-list-reservations-en-attente.component.html',
  styleUrls: ['./admin-list-reservations-en-attente.component.css'],
  styles:[`
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
export class AdminListReservationsEnAttenteComponent implements OnInit {

  displayBasic1: boolean;
  displayBasic2: boolean;


  constructor(private adminService: AdminService) {
  }

  get reservations(): Array<Reservation> {
    return this.adminService.reservations;
  }

  displayedColumns: string[] = ['email', 'type', 'dateDebut', 'dateFin','Annuler','disponibilite'];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);
  // dataSource = this.reservations;
  // dataSource = this.adminService.reservations;


// let chambre="chambre";

  showBasicDialog(type:string,reservation:Reservation) {
    if (type === "chambre"){
      this.displayBasic1 = true;
    }else if(type === "bungalow") {
      this.displayBasic2 = true;
    }
    this.reservationvar(reservation);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    console.log(this.reservations);
    this.adminService.findByreservationenattente()
  }

  reservationvar(reservation:Reservation){

    return reservation;
  }

  confirmer(reservation:Reservation) {
    this.adminService.confirmerReservation(reservation)

  }

  annuler(reservation:Reservation) {
    this.adminService.annulerReservation(reservation);

  }

  chambrevar(chambre: Chambre) {
    return chambre;
  }
}
