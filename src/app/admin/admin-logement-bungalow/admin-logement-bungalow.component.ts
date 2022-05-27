import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../controller/service/admin.service";
import {Chambre} from "../../controller/model/chambre.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Bungalow} from "../../controller/model/bungalow.model";

@Component({
  selector: 'app-admin-logement-bungalow',
  templateUrl: './admin-logement-bungalow.component.html',
  styleUrls: ['./admin-logement-bungalow.component.scss']
})
export class AdminLogementBungalowComponent implements OnInit {


  constructor(private adminService: AdminService) {
  }
  get bungalows(): Array<Bungalow> {

    return this.adminService.bungalows;
  }

  displayedColumns: string[] = ['numero','espace', 'capacity','description', 'prix','delete'];
  dataSource = new MatTableDataSource<Bungalow>(this.bungalows);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.findallbungalows();
  }

  delete(reference:string) {
    this.adminService.deleteBungalow(reference);

  }
  displayBasic: boolean;


  showBasicDialog() {
    this.displayBasic = true;
  }

}
