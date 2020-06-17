import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';
import {DelateCategoryOpportunityComponent} from '../../Opportunity/delate-category-opportunity/delate-category-opportunity.component';
import {MatDialog} from '@angular/material/dialog';
import {DelateHistoricalObjectiveComponent} from '../delate-historical-objective/delate-historical-objective.component';

@Component({
  selector: 'app-historical-objective',
  templateUrl: './historical-objective.component.html',
  styleUrls: ['./historical-objective.component.css']
})
export class HistoricalObjectiveComponent implements OnInit {
  p:number = 1;

  public data = {
    Strategique: ''
  };
  historique : any;
  public hidder = ["id" , "Description" , "Enjeux" ,"T1" , "T2" ,"T3" , "T4" , "T2020" , "T2021" ,
    "Process lie" , "indicateur" , "indicateur performance", "Objective a attendre" ,"Etat intial" ,
    "Num Action" , "Advencement" , "Commentaire" , "date"];
  constructor(private objectiveService: ObjectiveService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.objectiveService.gethistoricalObjective()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
    this.objectiveService.castObjective.subscribe( Objective => this.historique = Objective);
  }

  public delateHistoricalOjective(data): void {
    this.charingTheHistoricalOjective();
    const dialogRef = this.dialog.open(DelateHistoricalObjectiveComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheHistoricalOjective(){
    this.objectiveService.charingObjective(this.historique);
  }

  public CreateRole() {
    const role = localStorage.getItem('role');
    if ( role == 'ROLE_SUPERADMIN') {
      return true;
    }
  }
}
