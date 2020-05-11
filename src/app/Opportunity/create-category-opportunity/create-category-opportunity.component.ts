import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-category-opportunity',
  templateUrl: './create-category-opportunity.component.html',
  styleUrls: ['./create-category-opportunity.component.css']
})
export class CreateCategoryOpportunityComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  CategoryOpportunity: any;
  public data = {
    NameCategoryOpportunity: ''
  };

  id1: number;
  public data2: any = [];
  public data1: any = {
    id: "",
    fisrtname: "",
    lastename: "",
    adresse: "",
    city: "",
    state: "",
  };

  constructor( private opportunityService: OpportunityService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryOpportunityComponent>) {
    this.angForm = this.fb.group({
      NameCategoryOpportunity: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.opportunityService.castOpportunity.subscribe(Opportunity=> this.CategoryOpportunity = Opportunity);
    console.log(this.CategoryOpportunity);

  }

  savecategory(){
    this.charingTheCategoryOpportunity();
    console.log(this.data);
    this.opportunityService.saveCategoryOpportunity(this.data).subscribe(
      resp=>{
        console.log(this.CategoryOpportunity);
        this.CategoryOpportunity = this.CategoryOpportunity.push(this.data);
        console.log(this.CategoryOpportunity);
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

  charingTheCategoryOpportunity(){
    this.opportunityService.charingOpportunity(this.CategoryOpportunity);
  }

}
