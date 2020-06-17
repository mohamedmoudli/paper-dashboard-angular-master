import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RiskService} from '../../Services/Risk/risk.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategicRiskComponent} from '../create-strategic-risk/create-strategic-risk.component';
import {DelateStrategicRiskComponent} from '../delate-strategic-risk/delate-strategic-risk.component';
import {CreateStateRiskComponent} from '../create-state-risk/create-state-risk.component';
import {DelateStateRiskComponent} from '../delate-state-risk/delate-state-risk.component';

@Component({
  selector: 'app-state-risk',
  templateUrl: './state-risk.component.html',
  styleUrls: ['./state-risk.component.css']
})
export class StateRiskComponent implements OnInit {

  public stateRisk = [];
  StateRisk: any;
  public dataSource = new MatTableDataSource(this.stateRisk);
  public hidder = ["id" , "nom etat"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private riskService: RiskService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.riskService.getStateRisk()
      .subscribe((data) => {

        this.stateRisk = data['hydra:member'];
        console.log(this.stateRisk);
      },error => {
        console.log(false);
      });
    this.riskService.castRisk.subscribe(Risk => this.stateRisk = Risk);
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  public CreateStateRisk(): void {
    this.charingTheStateRisk();
    const dialogRef = this.dialog.open(CreateStateRiskComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateStateRisk(data): void {
    this.charingTheStateRisk();
    const dialogRef = this.dialog.open(DelateStateRiskComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheStateRisk(){
    this.riskService.charingRisk(this.stateRisk);
  }

}
