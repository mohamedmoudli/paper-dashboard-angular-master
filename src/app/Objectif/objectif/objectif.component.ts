import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {EnjeuRiqueComponent} from '../../Risque/enjeu-rique/enjeu-rique.component';
import {PIpertinanteComponent} from '../../Risque/pipertinante/pipertinante.component';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {
  objective : any;
  Enjeu : any;
  animal : any;
  public hidder = ["id", "Description"  , "Enjeu", "Temps1" , "Temps2" , "Temps3" , "Temps4" ,
    "Temps2020" , "Temps2021" , "ProcessLie" , "IndicateurPredefini" , "IndicateurPerformance" , "ObjectiveAAtendre" , "EtatInitial" ,  "NumAction" , "EtatActuelIndiacteur" , "Avencement" , "EtatActuel" ,
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
    this.objectiveService.getEnjeu()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });

  }

  saveHistoriqueOpportunite(){
    this.objectiveService.saveHistoriqueObjective()
      .subscribe((data) => {

        console.log(data);

      }, error => {
        console.log(false);
      });
  }

  public affficheEnjeux(): void {

    const dialogRef = this.dialog.open(EnjeuRiqueComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  public afffichePIpertinante(): void {

    const dialogRef = this.dialog.open(PIpertinanteComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

}
