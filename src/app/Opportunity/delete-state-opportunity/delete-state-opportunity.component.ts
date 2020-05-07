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

  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<DeleteStateOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.opportunityService.delateStateOpportunity(this.id).subscribe((data) => {
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
