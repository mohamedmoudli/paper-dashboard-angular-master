import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from '../../Services/Objective/objective.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-objective',
  templateUrl: './create-objective.component.html',
  styleUrls: ['./create-objective.component.css']
})
export class CreateObjectiveComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  Strategic: any ;
  Process: any ;
  Stake: any;

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
              private router: Router , private fb : FormBuilder) {
    this.angForm = this.fb.group({
      idStake: ['', [Validators.required]],
      idprocess: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Time1: ['', [Validators.required]],
      Time2: ['', [Validators.required]],
      Time3: ['', [Validators.required]],
      Time4: ['', [Validators.required]],
      Time2020: ['', [Validators.required]],
      Time2021: ['', [Validators.required]],
      PredefinedIndicator: ['', [Validators.required]],
      ObjectiveToWait: ['', [Validators.required]],
      InitialState: ['', [Validators.required]],
      CurrentState: ['', [Validators.required]],
      CurrentStateIndiactor: ['', [Validators.required]],
      Comment: ['', [Validators.required]],


    });
  }

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
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });
  }

  CreateObjective(){
    console.log();
    this.objectiveService.saveObjective(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        return this.router.navigate(['Objective']);
      },error => {
        console.log(error);

        return error;
      }
    )
  }

  get f() {
    return this.angForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.angForm.invalid) {

      return;
    }
  }
}
