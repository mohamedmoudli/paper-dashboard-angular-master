import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ObjectiveService} from '../../Services/Objective/objective.service';

@Component({
  selector: 'app-save-historical-objective',
  templateUrl: './save-historical-objective.component.html',
  styleUrls: ['./save-historical-objective.component.css']
})
export class SaveHistoricalObjectiveComponent implements OnInit {

  constructor(private objectiveService: ObjectiveService, private router: Router ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<SaveHistoricalObjectiveComponent>) { }

  ngOnInit(): void {
  }

  saveHistoricalOpportunity(){
    this.objectiveService.savehistoricalObjective()
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
