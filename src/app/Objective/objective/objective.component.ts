import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StakeRiskComponent} from '../../Risk/stake-risk/stake-risk.component';
import {PIRelevantComponent} from '../../Risk/pirelevant/pirelevant.component';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  objective : any;
  Enjeu : any;
  animal : any;
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
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
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

  saveHistoriqueOpportunite(){
    this.objectiveService.savehistoricalObjective()
      .subscribe((data) => {

        console.log(data);

      }, error => {
        console.log(false);
      });
  }

  public affficheEnjeux(): void {

    const dialogRef = this.dialog.open(StakeRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  public afffichePIpertinante(): void {

    const dialogRef = this.dialog.open(PIRelevantComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
