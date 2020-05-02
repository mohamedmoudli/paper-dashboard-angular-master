import { Component, OnInit } from '@angular/core';
import {PlandeactionService} from '../../Services/PlanDeAction/plandeaction.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-plan-de-action',
  templateUrl: './create-plan-de-action.component.html',
  styleUrls: ['./create-plan-de-action.component.css']
})
export class CreatePlanDeActionComponent implements OnInit {
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
  constructor(private plandeactionService: PlandeactionService,
              private router: Router) { }

  ngOnInit(): void {
    this.plandeactionService.getExigencyIP()
      .subscribe((data) => {
        this.exigencepi = data;
      },error => {
        console.log(error);

        return error;
      })
    this.plandeactionService.getRisk()
      .subscribe((data) => {
        this.risque = data;
      },error => {
        console.log(error);

        return error;
      })
    this.plandeactionService.getOpportunity()
      .subscribe((data) => {
        this.opportunite = data;
      },error => {
        console.log(error);

        return error;
      })
    this.plandeactionService.getObjective()
      .subscribe((data) => {
        this.objective = data;
      },error => {
        console.log(error);

        return error;
      })
  }
  saveplandeaction(){
    console.log(this.data);
    this.plandeactionService.saveplandeaction(this.data).subscribe(
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
