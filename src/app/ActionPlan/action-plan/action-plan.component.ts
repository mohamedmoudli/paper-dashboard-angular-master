import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.css']
})
export class ActionPlanComponent implements OnInit {
  plandeaction : any;
  Enjeu : any;
  animal : any;
  public hidder = ["id", "Origine"  , "id declenche" , "description" , "Action" , "DateDebutPanifie" , "Delai" ,
    "Respensable" , "Realisateur" , "Consulter" , "Avencement" , "CritereDeCloture" , "PreuveDeCloture" , "CritaireEfficacite" ,  "EtatDeEfficacite" , "EtatActuel" ,
    "Commentaire" ];
  constructor(private actionPlanService:  ActionPlanService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.actionPlanService.getplandeaction()
      .subscribe((data) => {

        console.log(data);
        this.plandeaction = data;
        console.log(this.plandeaction);
      }, error => {
        console.log(false);
      });
  }

}
