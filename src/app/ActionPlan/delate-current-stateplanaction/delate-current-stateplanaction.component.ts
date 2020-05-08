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

  constructor(private actionPlanService: ActionPlanService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCurrentStateplanactionComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.actionPlanService.delateCurrentStateplanaction(this.id).subscribe((data) => {
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
