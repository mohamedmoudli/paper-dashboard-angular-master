import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reevaluate-opportunity',
  templateUrl: './reevaluate-opportunity.component.html',
  styleUrls: ['./reevaluate-opportunity.component.css']
})
export class ReevaluateOpportunityComponent implements OnInit {
  categorieOpportunite: any ;
  Strategique: any ;
  Process: any ;
  EtatOpportunite: any ;
  public data = {
    EffortReevaluation: '',
    AventageReevaluation: '',
    idstrategicReevaluation: '',
    idprocessReevaluation: '',
    idStateOpportunityReevaluation: ''
  };

  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<ReevaluateOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });

    this.opportunityService.getStateOpportunity()
      .subscribe((data) => {

        this.EtatOpportunite = data['hydra:member'];
        console.log(this.EtatOpportunite);

      },error => {
        console.log(false);
      });

    this.opportunityService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }


  public reevaluateOpportunity() {
    this.opportunityService.reevaluationOpportinuty(this.id , this.data).subscribe((data) => {
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
