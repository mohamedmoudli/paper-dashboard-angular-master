import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historical-objective',
  templateUrl: './historical-objective.component.html',
  styleUrls: ['./historical-objective.component.css']
})
export class HistoricalObjectiveComponent implements OnInit {
  historique : any;
  public hidder = ["id" , "Description" , "Enjeux" ,"T1" , "T2" ,"T3" , "T4" , "T2020" , "T2021" ,
    "Process lie" , "indicateur" , "indicateur performance", "Objective a attendre" ,"Etat intial" ,
    "Num Action" , "Advencement" , "Commentaire" , "date"];
  constructor(private objectiveService: ObjectiveService,
              private router: Router) { }

  ngOnInit(): void {
    this.objectiveService.gethistoricalObjective()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }
}
