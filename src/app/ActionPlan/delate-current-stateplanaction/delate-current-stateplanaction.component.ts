import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';

@Component({
  selector: 'app-delate-current-stateplanaction',
  templateUrl: './delate-current-stateplanaction.component.html',
  styleUrls: ['./delate-current-stateplanaction.component.css']
})
export class DelateCurrentStateplanactionComponent implements OnInit {
  CurrentState:any;
  itemCurrentState:any;
  constructor(private actionPlanService: ActionPlanService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCurrentStateplanactionComponent>,
              @Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit(): void {
    this.actionPlanService.castPlanAction.subscribe(PlanAction=> this.CurrentState = PlanAction);
    console.log(this.CurrentState);
  }


  public delate() {
    this.actionPlanService.delateCurrentStateplanaction(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.CurrentState.indexOf(this.data);
      console.log(index);
      this.itemCurrentState = this.CurrentState.splice(index ,1);
      this.CurrentState = this.CurrentState.filter(user => user !== this.itemCurrentState);
      this.ngOnInit();
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
