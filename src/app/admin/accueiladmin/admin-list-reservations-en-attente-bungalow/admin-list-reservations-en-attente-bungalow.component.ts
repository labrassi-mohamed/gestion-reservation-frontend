import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {ReservationChambre} from "../../../controller/model/reservation-chambre.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Chambre} from "../../../controller/model/chambre.model";
import {ReservationBungalow} from "../../../controller/model/reservation-bungalow.model";

@Component({
  selector: 'app-admin-list-reservations-en-attente-bungalow',
  templateUrl: './admin-list-reservations-en-attente-bungalow.component.html',
  styleUrls: ['./admin-list-reservations-en-attente-bungalow.component.css']
})
export class AdminListReservationsEnAttenteBungalowComponent implements OnInit {



  displayedColumns: string[] = ['code','username', 'dateDebut', 'dateFin','disponibilite','reject'];
  dataSource = new MatTableDataSource<ReservationBungalow>(this.reservationBungalows);

  displayBasic: boolean;
  displayMaximizable: boolean;


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

  showBasicDialog(dateDebut:string,dateFin:string,res:ReservationBungalow) {

    res.dateDebutHelp=dateDebut;
    res.dateFinHelp=dateFin;
    this.reservationBungalow=res;
    this.displayBasic = true;
    this.adminService.findBungalowDisponible(this.reservationBungalow.dateDebutHelp,this.reservationBungalow.dateFinHelp);


  }


  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.adminService.findByReservationBungalowEnAttente()
  }


  reject(code: string ) {

    this.adminService.rejectReservationBungalow(code);
  }
}
