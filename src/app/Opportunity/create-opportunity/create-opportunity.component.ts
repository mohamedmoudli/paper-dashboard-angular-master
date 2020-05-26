import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  categoryOpportunity: any ;
  Strategic: any ;
  Process: any ;
  StateOpportunity: any;

  public data = {
    Description: '',
    ShortTerm: '',
    MediumTerm: '',
    LongTerm: '',
    DateIdentification: '',
    Consistency: '',
    Alignment: '',
    Presence: '',
    Skills: '',
    Continuity: '',
    Gain: '',
    Efforts: '',
    Advantage: '',
    idprocess: '',
    idstrategic: '',
    idStateOpportunity: '',
    idcategory: '',
    Comment: ''
  };
  constructor(private opportunityService: OpportunityService,
              private router: Router , private fb : FormBuilder) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      DateIdentification: ['', [Validators.required]],
      Identification: ['', [Validators.required]],
      Efforts: ['', [Validators.required]],
      Advantage: ['', [Validators.required]],
      idprocess: ['', [Validators.required]],
      idstrategic: ['', [Validators.required]],
      idStateOpportunity: ['', [Validators.required]],
      idcategory: ['', [Validators.required]],
      Durée: ['', [Validators.required]],
      Comment: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.opportunityService.getCategoryOpportunity()
      .subscribe((data) => {

        this.categoryOpportunity = data['hydra:member'];
        console.log(this.categoryOpportunity);

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

    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategic = data['hydra:member'];
        console.log(this.Strategic);

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

  CreateOpportunity(){

    this.opportunityService.saveOpportunity(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        return this.router.navigate(['Opportunite'])
      },error => {

        console.log(error);

        return error;
      }
    )
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
