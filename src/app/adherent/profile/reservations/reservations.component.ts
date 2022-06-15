import {Component, OnInit} from '@angular/core';
import {ReservationBungalow} from "../../../controller/model/reservation-bungalow.model";
import {ReservationService} from "../../../controller/service/reservation.service";
import {ReservationChambre} from "../../../controller/model/reservation-chambre.model";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
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
export class ReservationsComponent implements OnInit {

  dialog1: boolean;
  dialog2: boolean;

  constructor(private serviceResrvation: ReservationService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.serviceResrvation.allReservationChambresAdherent();
    this.serviceResrvation.allReservationBungalowAdherent();
    this.primengConfig.ripple = true;
  }

  showDialog1() {
    this.dialog1 = true;
  }

  showDialog2() {
    this.dialog2 = true;
  }

  confirm(event: Event, code: string, type: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Vous êtes sûre de supprimer ?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        if (type === "chambre"){
          this.serviceResrvation.annulerChambre(code);
        }else if (type === "bungalow"){
          this.serviceResrvation.annulerBungalow(code);
        }
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


  // Getters && Setters
  get reservationChambres(): Array<ReservationChambre> {
    return this.serviceResrvation.reservationChambres;
  }

  get reservationBungalows(): Array<ReservationBungalow> {
    return this.serviceResrvation.reservationBungalows;
  }

  get count(): number {
    return this.serviceResrvation.count;
  }

}
