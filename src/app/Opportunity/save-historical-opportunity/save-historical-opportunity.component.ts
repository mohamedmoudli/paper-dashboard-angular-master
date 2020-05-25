import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-save-historical-opportunity',
  templateUrl: './save-historical-opportunity.component.html',
  styleUrls: ['./save-historical-opportunity.component.css']
})
export class SaveHistoricalOpportunityComponent implements OnInit {

  constructor(private opportunityService: OpportunityService, private router: Router ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<SaveHistoricalOpportunityComponent>) { }

  ngOnInit(): void {
  }

  saveHistoricalOpportunity(){
    this.opportunityService.savehistoricalOpportunite()
      .subscribe((data) => {

        console.log(data);
        this.onNoClick();

      }, error => {
        console.log(false);
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
