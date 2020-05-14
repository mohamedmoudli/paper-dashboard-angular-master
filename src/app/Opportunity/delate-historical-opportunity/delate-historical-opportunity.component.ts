import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-historical-opportunity',
  templateUrl: './delate-historical-opportunity.component.html',
  styleUrls: ['./delate-historical-opportunity.component.css']
})
export class DelateHistoricalOpportunityComponent implements OnInit {

  HistoricalOpportunity: any;
  itemOpportunity: any;
  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateHistoricalOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.opportunityService.castOpportunity.subscribe(Opportunity=> this.HistoricalOpportunity = Opportunity);
    console.log(this.HistoricalOpportunity);
  }


  public delate() {
    this.opportunityService.delatehistoricalOpportunity(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.HistoricalOpportunity.indexOf(this.data);
      console.log(index);
      this.itemOpportunity  = this.HistoricalOpportunity.splice(index ,1);
      this.HistoricalOpportunity = this.HistoricalOpportunity.filter(user => user !== this.itemOpportunity );
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
