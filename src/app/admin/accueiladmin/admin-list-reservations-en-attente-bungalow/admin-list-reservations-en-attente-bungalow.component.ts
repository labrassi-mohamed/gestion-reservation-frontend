import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {ReservationChambre} from "../../../controller/model/reservation-chambre.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Chambre} from "../../../controller/model/chambre.model";
import {ReservationBungalow} from "../../../controller/model/reservation-bungalow.model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-list-reservations-en-attente-bungalow',
  templateUrl: './admin-list-reservations-en-attente-bungalow.component.html',
  styleUrls: ['./admin-list-reservations-en-attente-bungalow.component.css'],
  providers: [ConfirmationService]
})
export class AdminListReservationsEnAttenteBungalowComponent implements OnInit {



  displayedColumns: string[] = ['code','username', 'dateDebut', 'dateFin','disponibilite','propose','reject'];
  dataSource = new MatTableDataSource<ReservationBungalow>(this.reservationBungalows);

  displayBasic: boolean;
  displayBasic2: boolean;
  displayMaximizable: boolean;


  constructor(private adminService: AdminService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.adminService.findByReservationBungalowEnAttente()
  }

  confirm(event: Event, code: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Vous êtes sûre de rejecter ?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.reject(code)
        this.messageService.add({
          severity: "info",
          summary: "Votre reservation est annuler",
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Votre reservation n'est pas annuler",
        });
      }
    });
  }

  showBasicDialog(dateDebut:string,dateFin:string,res:ReservationBungalow) {
    res.dateDebutHelp=dateDebut;
    res.dateFinHelp=dateFin;
    this.reservationBungalow=res;
    this.displayBasic = true;
    this.adminService.findBungalowDisponible(this.reservationBungalow.dateDebutHelp,this.reservationBungalow.dateFinHelp);
  }
  showBasicDialog2(dateDebut:string,dateFin:string,res:ReservationBungalow) {
    res.dateDebutHelp=dateDebut;
    res.dateFinHelp=dateFin;
    this.reservationBungalow=res;
    this.displayBasic2 = true;
    this.adminService.findbungalowPropose(this.reservationBungalow.dateDebutHelp,this.reservationBungalow.dateFinHelp);
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  reject(code: string ) {
    this.adminService.rejectReservationBungalow(code);
  }


  // Getters && Setters
  get reservationBungalow(): ReservationBungalow {

    return this.adminService.reservationBungalow;
  }

  set reservationBungalow(value: ReservationBungalow) {
    this.adminService.reservationBungalow = value;
  }

  get reservationBungalows(): Array<ReservationBungalow> {
    return this.adminService.reservationBungalows;
  }

}
