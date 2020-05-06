import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';

@Component({
  selector: 'app-create-action-plan',
  templateUrl: './create-action-plan.component.html',
  styleUrls: ['./create-action-plan.component.css']
})
export class CreateActionPlanComponent implements OnInit {
  exigencepi : any;
  risque : any;
  opportunite : any;
  objective : any;
  public data = {
    Origin: '',
    Action: '',
    StartDatePanifies: '',
    Delai: '',
    Responsible: '',
    Director: '',
    Consult: '',
    Advancement: '',
    ClosingCriterion: '',
    ProofOfClosure: '',
    CriteriaEfficiency: '',
    StateOfEfficacy: '',
    CurrentState: '',
    Comment: '',
    idExigency: '',
    idRisk: '',
    idObjective: '',
    idOpportunity: '',
    idOpportunityreevaluation: ''
  };
  constructor(private actionPlanService: ActionPlanService,
              private router: Router) { }

  ngOnInit(): void {
    this.actionPlanService.getExigencyIP()
      .subscribe((data) => {
        this.exigencepi = data;
      },error => {
        console.log(error);

        return error;
      })
    this.actionPlanService.getRisk()
      .subscribe((data) => {
        this.risque = data;
      },error => {
        console.log(error);

        return error;
      })
    this.actionPlanService.getOpportunity()
      .subscribe((data) => {
        this.opportunite = data;
      },error => {
        console.log(error);

        return error;
      })
    this.actionPlanService.getObjective()
      .subscribe((data) => {
        this.objective = data;
      },error => {
        console.log(error);

        return error;
      })
  }
  CreateActionPlan(){
    console.log(this.data);
    this.actionPlanService.saveplandeaction(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        return this.router.navigate(['Plandeaction'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }
}