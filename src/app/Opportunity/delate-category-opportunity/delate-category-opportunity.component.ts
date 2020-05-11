import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-category-opportunity',
  templateUrl: './delate-category-opportunity.component.html',
  styleUrls: ['./delate-category-opportunity.component.css']
})
export class DelateCategoryOpportunityComponent implements OnInit {

  CategoryOpportunity: any;
  itemOpportunity: any;
  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.opportunityService.castOpportunity.subscribe(Opportunity=> this.CategoryOpportunity = Opportunity);
    console.log(this.CategoryOpportunity);
  }


  public delate() {
    this.opportunityService.delateCategoryOpportunity(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.CategoryOpportunity.indexOf(this.data);
      console.log(index);
      this.itemOpportunity  = this.CategoryOpportunity.splice(index ,1);
      this.CategoryOpportunity = this.CategoryOpportunity.filter(user => user !== this.itemOpportunity );
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
