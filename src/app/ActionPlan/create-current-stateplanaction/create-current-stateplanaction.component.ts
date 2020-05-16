import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';

@Component({
  selector: 'app-create-current-stateplanaction',
  templateUrl: './create-current-stateplanaction.component.html',
  styleUrls: ['./create-current-stateplanaction.component.css']
})
export class CreateCurrentStateplanactionComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  CurrentState: any;
  public data = {
    NameCurrentState: ''
  };


  constructor( private actionPlanService: ActionPlanService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCurrentStateplanactionComponent>) {
    this.angForm = this.fb.group({
      NameCurrentState: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.actionPlanService.castPlanAction.subscribe(PlanAction=> this.CurrentState = PlanAction);
    console.log(this.CurrentState);
  }

  createCurrentState(){
    this.charingTheCurrentState();
    console.log(this.data);
    this.actionPlanService.saveCurrentStateplanaction(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(this.CurrentState);
        this.CurrentState = this.CurrentState.push(this.data);
        console.log(this.CurrentState);
        return this.onNoClick();
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  charingTheCurrentState(){
    this.actionPlanService.charingPlanAction(this.CurrentState);
  }
}
