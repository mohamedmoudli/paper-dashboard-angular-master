import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-state-opportunity',
  templateUrl: './create-state-opportunity.component.html',
  styleUrls: ['./create-state-opportunity.component.css']
})
export class CreateStateOpportunityComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameStateOpportunity: ''
  };

  id1: number;


  constructor( private opportunityService: OpportunityService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStateOpportunityComponent>) {
    this.angForm = this.fb.group({
      NameStateOpportunity: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  createState(){
    console.log(this.data);
    this.opportunityService.saveStateOpportunity(this.data).subscribe(
      resp=>{
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

}
