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

  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryRisk: ''
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

  constructor( private riskService: RiskService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryRiskComponent>) {
    this.angForm = this.fb.group({
      NameCategoryRisk: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  CreateCategory(){
    console.log(this.data);
    this.riskService.saveCategoryRisk(this.data).subscribe(
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
