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

  }

  createCurrentState(){
    console.log(this.data);
    this.actionPlanService.saveCurrentStateplanaction(this.data).subscribe(
      resp=>{
        console.log(resp);
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

}
