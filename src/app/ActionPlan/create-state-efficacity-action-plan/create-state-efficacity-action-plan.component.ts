import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-state-efficacity-action-plan',
  templateUrl: './create-state-efficacity-action-plan.component.html',
  styleUrls: ['./create-state-efficacity-action-plan.component.css']
})
export class CreateStateEfficacityActionPlanComponent implements OnInit {
  angForm: FormGroup;
  StateEfficacy: any;
  submitted = false;
  public data = {
    NameStateEfficacy: ''
  };


  constructor( private actionPlanService: ActionPlanService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStateEfficacityActionPlanComponent>) {
    this.angForm = this.fb.group({
      NameStateEfficacy: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.actionPlanService.castPlanAction.subscribe(PlanAction=> this.StateEfficacy = PlanAction);
    console.log(this.StateEfficacy);
  }

  createNameStateEfficacity(){
    this.charingTheStateEfficacity();
    console.log(this.data);
    this.actionPlanService.saveStateEfficacityActionPlan(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(this.StateEfficacy);
        this.StateEfficacy = this.StateEfficacy.push(this.data);
        console.log(this.StateEfficacy);
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
  charingTheStateEfficacity(){
    this.actionPlanService.charingPlanAction(this.StateEfficacy);
  }
}
