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


  constructor(private actionPlanService: ActionPlanService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStateEfficacityActionPlanComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.actionPlanService.delateStateEfficacityActionPlan(this.id).subscribe((data) => {
      console.log("ffffffffff");
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
