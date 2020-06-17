import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {RiskService} from '../../Services/Risk/risk.service';
import {DelateHistoricalOpportunityComponent} from '../../Opportunity/delate-historical-opportunity/delate-historical-opportunity.component';
import {MatDialog} from '@angular/material/dialog';
import {DelateHistoricalRiskComponent} from '../delate-historical-risk/delate-historical-risk.component';

@Component({
  selector: 'app-historical-risk',
  templateUrl: './historical-risk.component.html',
  styleUrls: ['./historical-risk.component.css']
})
export class HistoricalRiskComponent implements OnInit {
  historique : any;
  public data = {
    Strategique: ''
  };
  public animal: string;
  p:number = 1;
  public hidder = ["id" , "Criticite", "decision" , "strategique" , "processus" , "Etat risque" , "Commentaire" ,"num action" , "date"];
  constructor(private riskService: RiskService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.riskService.gethistoricalRisk()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });

    this.riskService.castRisk.subscribe( Risk => this.historique = Risk);
  }


  public delateHistoricalRisk(data): void {
    this.charingTheHistoricalRisk();
    const dialogRef = this.dialog.open(DelateHistoricalRiskComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  charingTheHistoricalRisk(){
    this.riskService.charingRisk(this.historique);
  }
}
