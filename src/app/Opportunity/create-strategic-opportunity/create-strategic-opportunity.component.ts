import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-strategic-opportunity',
  templateUrl: './create-strategic-opportunity.component.html',
  styleUrls: ['./create-strategic-opportunity.component.css']
})
export class CreateStrategicOpportunityComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  StrategicOpportunity: any;
  public data = {
    NameStrategicOpportunity: ''
  };


  constructor( private opportunityService: OpportunityService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStrategicOpportunityComponent>) {
    this.angForm = this.fb.group({
      NameStrategicOpportunity: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.opportunityService.castOpportunity.subscribe(Opportunity=> this.StrategicOpportunity = Opportunity);
    console.log(this.StrategicOpportunity);
  }

  createStrategic(){
    this.charingTheStrategicOpportunity();
    console.log(this.data);
    this.opportunityService.saveStrategicOpportunity(this.data).subscribe(
      resp=>{
        console.log(this.StrategicOpportunity);
        this.StrategicOpportunity = this.StrategicOpportunity.push(this.data);
        console.log(this.StrategicOpportunity);
        console.log(resp);
        return this.onNoClick();
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
  onNoClick(): void {
    this.dialogRef.close();
  }

  charingTheStrategicOpportunity(){
    this.opportunityService.charingOpportunity(this.StrategicOpportunity);
  }
}
