import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';
import {ObjectiveService} from '../../Services/Objective/objective.service';

@Component({
  selector: 'app-create-objectif',
  templateUrl: './create-objectif.component.html',
  styleUrls: ['./create-objectif.component.css']
})
export class CreateObjectifComponent implements OnInit {
  categorieOpportunite: any ;
  Strategique: any ;
  Process: any ;
  Enjeu: any;
  IndicateurPredefini: any;
  public data = {
    idStake: '',
    idprocess: '',
    Description: '',
    Time1: '',
    Time2: '',
    Time3: '',
    Time4: '',
    Time2020: '',
    Time2021: '',
    PredefinedIndicator: '',
    PerformanceIndicator: '',
    ObjectiveToWait: '',
    InitialState: '',
    CurrentState: '',
    CurrentStateIndiactor: '',
    Comment: ''
  };
  constructor(private objectiveService: ObjectiveService,
              private router: Router) { }

  ngOnInit(): void {

    this.objectiveService.getProcessRisque()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
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
  }

  saveObjective(){
    console.log();
    this.objectiveService.saveObjective(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);

      },error => {

        console.log(error);

        return error;
      }
    )
  }
}
