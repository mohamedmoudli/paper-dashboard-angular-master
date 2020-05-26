import {Component, Inject, OnInit} from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reevaluate-opportunity',
  templateUrl: './reevaluate-opportunity.component.html',
  styleUrls: ['./reevaluate-opportunity.component.css']
})
export class ReevaluateOpportunityComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;

  Strategic: any ;
  Process: any ;
  StateOpportunity: any ;
  public data = {
    EffortReevaluation: '',
    AventageReevaluation: '',
    idstrategicReevaluation: '',
    idprocessReevaluation: '',
    idStateOpportunityReevaluation: ''
  };

  constructor(private opportunityService: OpportunityService,
              private router:Router ,  public dialogRef: MatDialogRef<ReevaluateOpportunityComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number , private fb : FormBuilder) {

    this.angForm = this.fb.group({

      Efforts: ['', [Validators.required]],
      Advantage: ['', [Validators.required]],
      idprocess: ['', [Validators.required]],
      idstrategic: ['', [Validators.required]],
      idStateOpportunity: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategic = data['hydra:member'];
        console.log(this.Strategic);

      },error => {
        console.log(false);
      });

    this.opportunityService.getStateOpportunity()
      .subscribe((data) => {

        this.StateOpportunity = data['hydra:member'];
        console.log(this.StateOpportunity);

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
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.router.navigate(['Opportunite']);
    this.dialogRef.close();
  }
  get f() {
    return this.angForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.angForm.invalid) {

      return;
    }
  }
}
