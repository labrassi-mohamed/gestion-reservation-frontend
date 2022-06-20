import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {AdminService} from "../../../controller/service/admin.service";

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent implements OnInit {

 private mychart:Chart;
  private reservationConfirme:number;
  private reservationencours:number;
  private reservationrejecter:number;

  constructor(private adminService:AdminService) {}

  ngOnInit(): void {

   this.pie(this.reservationConfirme,this.reservationencours,this.reservationrejecter);
  }


  private pie(reservationConfirme:number,
      reservationencours:number
    , reservationrejecter:number){
    this.mychart=new Chart('myPieChart', {

      type: 'pie',
      data:{
        labels: [
          'Reservation confirmer',
          'Reservation en cours',
          'Reservation rejecter'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [250, 50, 150],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options:{
        responsive:true
      }

    })

  }

}
