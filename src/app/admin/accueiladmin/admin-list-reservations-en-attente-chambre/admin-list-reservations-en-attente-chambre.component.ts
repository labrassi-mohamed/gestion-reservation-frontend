import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../controller/service/admin.service";
import {Reservation} from "../../../controller/model/reservation.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Chambre} from "../../../controller/model/chambre.model";
import {ReservationChambre} from "../../../controller/model/reservation-chambre.model";
import {ConfirmationService, MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-admin-list-reservations-en-attente-chambre',
  templateUrl: './admin-list-reservations-en-attente-chambre.component.html',
  styleUrls: ['./admin-list-reservations-en-attente-chambre.component.css'],
  providers: [ConfirmationService],
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
export class AdminListReservationsEnAttenteChambreComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayBasic: boolean;
  displayBasic2: boolean;
  displayMaximizable: boolean;
  displayedColumns: string[] = ['code', 'username', 'dateDebut', 'dateFin', 'disponibilite', 'propose', 'reject'];
  dataSource = new MatTableDataSource<ReservationChambre>(this.reservationChambres);


  constructor(private adminService: AdminService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.adminService.findByReservationChambreEnAttente();
    this.primengConfig.ripple = true;
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


  showBasicDialog(dateDebut: string, dateFin: string, res: ReservationChambre) {
    res.dateDebutHelp = dateDebut;
    res.dateFinHelp = dateFin;
    this.reservationChambre = res;
    this.displayBasic = true;
    this.adminService.findchambresDisponible(this.reservationChambre.dateDebutHelp, this.reservationChambre.dateFinHelp);
  }

  showBasicDialog2(dateDebut: string, dateFin: string, res: ReservationChambre) {
    res.dateDebutHelp = dateDebut;
    res.dateFinHelp = dateFin;
    this.reservationChambre = res;
    this.displayBasic2 = true;
    this.adminService.findchambresPropose(this.reservationChambre.dateDebutHelp, this.reservationChambre.dateFinHelp);
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  chambrevar(chambre: Chambre) {
    return chambre;
  }

  reject(code: string) {
    this.adminService.rejectReservationChambre(code);
  }


  // Getters && Setters
  get reservationChambre(): ReservationChambre {
    return this.adminService.reservationChambre;
  }

  set reservationChambre(value: ReservationChambre) {
    this.adminService.reservationChambre = value;
  }

  get reservationChambres(): Array<ReservationChambre> {

    return this.adminService.reservationChambres;
  }

}
