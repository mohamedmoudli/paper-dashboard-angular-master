import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-create-category-risk',
  templateUrl: './create-category-risk.component.html',
  styleUrls: ['./create-category-risk.component.css']
})
export class CreateCategoryRiskComponent implements OnInit {
  CategoryRisk: any;
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryRisk: ''
  };



  constructor( private riskService: RiskService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryRiskComponent>) {
    this.angForm = this.fb.group({
      NameCategoryRisk: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.riskService.castRisk.subscribe(Risk=> this.CategoryRisk = Risk);
    console.log(this.CategoryRisk);

  }

  CreateCategory(){
    this.charingTheRisk();
    console.log(this.data);
    this.riskService.saveCategoryRisk(this.data).subscribe(
      resp=>{
        console.log(this.CategoryRisk);
        this.CategoryRisk = this.CategoryRisk.push(this.data);
        console.log(this.CategoryRisk);
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

  charingTheRisk(){
    this.riskService.charingRisk(this.CategoryRisk);
  }
}
