import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-reservations',
  providers: [MessageService],

  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})
export class AdminReservationsComponent implements OnInit {

  save(severity: string) {
    this.messageService.add({severity: severity, summary:'Success', detail:'Data dowloaded'});
  }
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
