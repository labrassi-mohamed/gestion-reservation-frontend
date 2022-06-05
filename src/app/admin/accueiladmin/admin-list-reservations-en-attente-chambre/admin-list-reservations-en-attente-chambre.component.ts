import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Reservation} from "../../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Chambre} from "../../../controller/model/chambre.model";
import {ReservationChambre} from "../../../controller/model/reservation-chambre.model";

@Component({
  selector: 'app-admin-list-reservations-en-attente-chambre',
  templateUrl: './admin-list-reservations-en-attente-chambre.component.html',
  styleUrls: ['./admin-list-reservations-en-attente-chambre.component.css'],
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
export class AdminListReservationsEnAttenteChambreComponent implements OnInit {


  displayBasic: boolean;
  displayMaximizable: boolean;



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


  displayedColumns: string[] = ['code','type', 'dateDebut', 'dateFin','disponibilite','check'];
  dataSource = new MatTableDataSource<ReservationChambre>(this.reservationChambres);
  // dataSource = this.reservations;
  // dataSource = this.adminService.reservations;


// let chambre="chambre";

  showBasicDialog(dateDebut:string,dateFin:string,res:ReservationChambre) {

    res.dateDebutHelp=dateDebut;
    res.dateFinHelp=dateFin;
    this.reservationChambre=res;
    this.displayBasic = true;
    this.adminService.findchambresDisponible(this.reservationChambre.dateDebutHelp,this.reservationChambre.dateFinHelp);


  }


  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.adminService.findByReservationChambreEnAttente()
  }


  chambrevar(chambre: Chambre) {
    return chambre;
  }
}
