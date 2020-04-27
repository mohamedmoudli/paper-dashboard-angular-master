import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PlandeactionService} from '../../Services/PlanDeAction/plandeaction.service';

@Component({
  selector: 'app-plan-de-action',
  templateUrl: './plan-de-action.component.html',
  styleUrls: ['./plan-de-action.component.css']
})
export class PlanDeActionComponent implements OnInit {
  plandeaction : any;
  Enjeu : any;
  animal : any;
  public hidder = ["id", "Origine"  , "id declenche" , "description" , "Action" , "DateDebutPanifie" , "Delai" ,
    "Respensable" , "Realisateur" , "Consulter" , "Avencement" , "CritereDeCloture" , "PreuveDeCloture" , "CritaireEfficacite" ,  "EtatDeEfficacite" , "EtatActuel" ,
    "Commentaire" ];
  constructor(private plandeactionService: PlandeactionService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.plandeactionService.getplandeaction()
      .subscribe((data) => {

        console.log(data);
        this.plandeaction = data;
        console.log(this.plandeaction);
      }, error => {
        console.log(false);
      });
  }

}
