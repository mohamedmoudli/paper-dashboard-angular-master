import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HelpRiskComponent} from '../help-risk/help-risk.component';
import {DefinionRiskComponent} from '../definion-risk/definion-risk.component';
import {PIRelevantComponent} from '../pirelevant/pirelevant.component';
import {StakeRiskComponent} from '../stake-risk/stake-risk.component';
import {RiskService} from '../../Services/Risk/risk.service';
import {SaveHistoricalRiskComponent} from '../save-historical-risk/save-historical-risk.component';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  public animal: string;
  Risk: any ;
  risk: any ;
  Stake: any ;


  public hidder = ["id", "CategorieRisque" , "description" , "court term" , "moyen term" , "long term" ,
    "date d'indentification" , "cause" , "consequence" , "gravite" , "probabilité" , "detectabilité" , "creticité" , "decision" ,
    'strategique' , "process lié" , "N action" , "etat risque" , "commentaire"];
  constructor(private riskService: RiskService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {

    this.riskService.getRisk()
      .subscribe((data) => {

        console.log(data);
        this.Risk = data;
        console.log(this.Risk);
      }, error => {
        console.log(false);
      });
    this.riskService.getstake()
      .subscribe((data) => {

        console.log(data);
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });

  }



  public DisplayStake(): void {

    const dialogRef = this.dialog.open(StakeRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  public DisplayPIRelevant(): void {

    const dialogRef = this.dialog.open(PIRelevantComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  public saveHistoricalRisk(): void {

    const dialogRef = this.dialog.open(SaveHistoricalRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  definitionRisk(){
    const dialogRef = this.dialog.open(DefinionRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  helpRisk(){
    const dialogRef = this.dialog.open(HelpRiskComponent, {
      width: "350px",
      height: "400px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  public CreateRole() {
    const role = localStorage.getItem('role');
    if ( role == 'ROLE_SUPERADMIN') {
      return true;
    }
  }
}
