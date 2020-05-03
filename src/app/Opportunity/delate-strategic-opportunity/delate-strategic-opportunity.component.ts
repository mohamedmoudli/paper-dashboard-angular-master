import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DelateStrategicRiskComponent} from '../../Risk/delate-strategic-risk/delate-strategic-risk.component';

@Component({
  selector: 'app-delate-strategic-opportunity',
  templateUrl: './delate-strategic-opportunity.component.html',
  styleUrls: ['./delate-strategic-opportunity.component.css']
})
export class DelateStrategicOpportunityComponent implements OnInit {


  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStrategicOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.opportunityService.delateStrategicOpportunity(this.id).subscribe((data) => {
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
