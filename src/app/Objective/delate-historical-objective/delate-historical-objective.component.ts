import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ObjectiveService} from '../../Services/Objective/objective.service';

@Component({
  selector: 'app-delate-historical-objective',
  templateUrl: './delate-historical-objective.component.html',
  styleUrls: ['./delate-historical-objective.component.css']
})
export class DelateHistoricalObjectiveComponent implements OnInit {

  HistoricalObjective: any;
  itemObjective: any;
  constructor(private objectiveService: ObjectiveService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateHistoricalObjectiveComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.objectiveService.castObjective.subscribe(Objective=> this.HistoricalObjective = Objective);
    console.log(this.HistoricalObjective);
  }


  public delate() {
    this.objectiveService.delatehistoricalObjective(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.HistoricalObjective.indexOf(this.data);
      console.log(index);
      this.itemObjective  = this.HistoricalObjective.splice(index ,1);
      this.HistoricalObjective = this.HistoricalObjective.filter(user => user !== this.itemObjective );
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
