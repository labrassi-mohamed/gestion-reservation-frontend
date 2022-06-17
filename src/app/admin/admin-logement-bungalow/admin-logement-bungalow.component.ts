import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Chambre} from "../../controller/model/chambre.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Bungalow} from "../../controller/model/bungalow.model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-logement-bungalow',
  templateUrl: './admin-logement-bungalow.component.html',
  styleUrls: ['./admin-logement-bungalow.component.scss'],
  providers: [ConfirmationService]
})
export class AdminLogementBungalowComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['numero', 'espace', 'capacity', 'description', 'prix', 'delete'];
  dataSource = new MatTableDataSource<Bungalow>(this.bungalows);


  constructor(private adminService: AdminService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  confirm(event: Event, reference: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Vous êtes sûre de supprimer ?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.delete(reference);
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

  ngOnInit(): void {
    this.adminService.findallbungalows();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(reference: string) {
    this.adminService.deleteBungalow(reference);
  }

// Getters && Setters
  get bungalows(): Array<Bungalow> {
    return this.adminService.bungalows;
  }

}
