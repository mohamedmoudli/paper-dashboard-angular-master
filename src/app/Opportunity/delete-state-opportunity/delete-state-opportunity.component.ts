import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-state-opportunity',
  templateUrl: './delete-state-opportunity.component.html',
  styleUrls: ['./delete-state-opportunity.component.css']
})
export class DeleteStateOpportunityComponent implements OnInit {
  itemState: any;
  StateOpportunity: any;
  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<DeleteStateOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.opportunityService.castOpportunity.subscribe(Opportunity=> this.StateOpportunity = Opportunity);
    console.log(this.StateOpportunity);
  }


  public delate() {
    this.opportunityService.delateStateOpportunity(this.data.id).subscribe((data) => {
      const index: number = this.StateOpportunity.indexOf(this.data);
      console.log(index);
      this.itemState  = this.StateOpportunity.splice(index ,1);
      this.StateOpportunity = this.StateOpportunity.filter(user => user !== this.itemState );
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
