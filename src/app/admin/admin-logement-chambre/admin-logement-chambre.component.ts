import {Component, OnInit, ViewChild} from '@angular/core';
import {Chambre} from "../../controller/model/chambre.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "../../controller/service/admin.service";

@Component({
  selector: 'app-admin-logement-chambre',
  templateUrl: './admin-logement-chambre.component.html',
  styleUrls: ['./admin-logement-chambre.component.scss']
})
export class AdminLogementChambreComponent implements OnInit {

  constructor(private adminService: AdminService) {
  }
  get chambres(): Array<Chambre> {

    return this.adminService.chambres;
  }

  displayedColumns: string[] = ['numero','espace', 'capacity','description', 'prix','delete'];
  dataSource = new MatTableDataSource<Chambre>(this.chambres);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.adminService.findallchambres();
  }

  delete(reference:string) {
    this.adminService.deleteChambre(reference);

  }

  displayBasic: boolean;


  showBasicDialog() {
    this.displayBasic = true;
  }
}



