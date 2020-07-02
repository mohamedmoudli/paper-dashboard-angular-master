import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StakeRiskComponent} from '../../Risk/stake-risk/stake-risk.component';
import {PIRelevantComponent} from '../../Risk/pirelevant/pirelevant.component';
import {SaveHistoricalObjectiveComponent} from '../save-historical-objective/save-historical-objective.component';
import {HelpObjectiveComponent} from '../help-objective/help-objective.component';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  objective : any;
  Stake : any;

  public hidder = ["id", "Description"  , "Enjeu", "Temps1" , "Temps2" , "Temps3" , "Temps4" ,
    "Temps2020" , "Temps2021" , "ProcessLie" , "IndicateurPredefini" , "IndicateurPerformance" , "ObjectiveAAtendre" ,
    "EtatInitial" ,  "NumAction" , "EtatActuelIndiacteur" , "Avencement" , "EtatActuel" ,
    "Commentaire" ];
  constructor(private objectiveService: ObjectiveService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {

    this.objectiveService.getObjective()
      .subscribe((data) => {

        console.log(data);
        this.objective = data;
        console.log(this.objective);
      }, error => {
        console.log(false);
      });
    this.objectiveService.getStake()
      .subscribe((data) => {

        console.log(data);
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });
    this.objectiveService.getAdvencementObjective()
      .subscribe((data) => {

        console.log(data);
      }, error => {
        console.log(false);
      });
  }



  saveHistoricalObjective(): void {

    const dialogRef = this.dialog.open(SaveHistoricalObjectiveComponent, {
      width: "400px",
      height: "200px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  public dispalyStake(): void {

    const dialogRef = this.dialog.open(StakeRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  public helpObjective(): void {

    const dialogRef = this.dialog.open(HelpObjectiveComponent, {
      width: "400px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  public CreateObjectiveRole(){
    const role = localStorage.getItem('role');
    if (role == 'ROLE_ADMIN' || role == 'ROLE_SUPERADMIN' || role == 'ROLE_ADMINPRINCIPALE' ) {
      return true;
    }
}
  public DisplayInterestedPartyRevelant(): void {

    const dialogRef = this.dialog.open(PIRelevantComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

}
