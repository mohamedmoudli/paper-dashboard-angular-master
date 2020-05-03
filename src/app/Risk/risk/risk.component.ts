import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HelpRiskComponent} from '../help-risk/help-risk.component';
import {DefinionRiskComponent} from '../definion-risk/definion-risk.component';
import {PIRelevantComponent} from '../pirelevant/pirelevant.component';
import {StakeRiskComponent} from '../stake-risk/stake-risk.component';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  public animal: string;
  users: any ;
  risque: any ;
  Enjeu: any ;


  public hidder = ["id", "CategorieRisque" , "description" , "court term" , "moyen term" , "long term" ,
    "date d'indentification" , "cause" , "consequence" , "gravite" , "probabilité" , "detectabilité" , "creticité" , "decision" ,
    'strategique' , "process lié" , "N action" , "etat risque" , "commentaire"];
  constructor(private riskService: RiskService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {

    this.riskService.getRisk()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });
    this.riskService.getstake()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
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
      this.animal = result;
    });
  }

  public DisplayPIpertinante(): void {

    const dialogRef = this.dialog.open(PIRelevantComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  saveHistoricalRisk(){
    this.riskService.savehistoricalRisk()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }

  definitionRisk(){
    const dialogRef = this.dialog.open(DefinionRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  helpRisk(){
    const dialogRef = this.dialog.open(HelpRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
