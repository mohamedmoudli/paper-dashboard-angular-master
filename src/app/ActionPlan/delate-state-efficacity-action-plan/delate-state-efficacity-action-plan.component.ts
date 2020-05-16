import {Component, Inject, OnInit} from '@angular/core';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-state-efficacity-action-plan',
  templateUrl: './delate-state-efficacity-action-plan.component.html',
  styleUrls: ['./delate-state-efficacity-action-plan.component.css']
})
export class DelateStateEfficacityActionPlanComponent implements OnInit {

  StateEfficacy:any;
  itemStateEfficacy:any;
  constructor(private actionPlanService: ActionPlanService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStateEfficacityActionPlanComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.actionPlanService.castPlanAction.subscribe(PlanAction=> this.StateEfficacy = PlanAction);
    console.log(this.StateEfficacy);
  }


  public delate() {
    this.actionPlanService.delateStateEfficacityActionPlan(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.StateEfficacy.indexOf(this.data);
      console.log(index);
      this.itemStateEfficacy = this.StateEfficacy.splice(index ,1);
      this.StateEfficacy = this.StateEfficacy.filter(user => user !== this.itemStateEfficacy);
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
