import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategicRiskComponent} from '../create-strategic-risk/create-strategic-risk.component';
import {DelateStrategicRiskComponent} from '../delate-strategic-risk/delate-strategic-risk.component';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-strategic-risk',
  templateUrl: './strategic-risk.component.html',
  styleUrls: ['./strategic-risk.component.css']
})
export class StrategicRiskComponent implements OnInit {

  public StrategicRisk = [];
  public dataSource = new MatTableDataSource(this.StrategicRisk);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private riskService: RiskService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.riskService.getStrategicRisk()
      .subscribe((data) => {

        this.StrategicRisk = data['hydra:member'];
        console.log(this.StrategicRisk);
      },error => {
        console.log(false);
      });
    this.riskService.castRisk.subscribe(Risk => this.StrategicRisk = Risk);
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  public CreateStrategicRisk(): void {
    this.charingTheStrategicRisk();
    const dialogRef = this.dialog.open(CreateStrategicRiskComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateStrategic(data): void {
    this.charingTheStrategicRisk();
    const dialogRef = this.dialog.open(DelateStrategicRiskComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheStrategicRisk(){
    this.riskService.charingRisk(this.StrategicRisk);
  }
}
