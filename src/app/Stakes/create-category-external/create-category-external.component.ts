import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-create-category-external',
  templateUrl: './create-category-external.component.html',
  styleUrls: ['./create-category-external.component.css']
})
export class CreateCategoryExternalComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryStakExternal: ''
  };

  constructor(private stakeService : StakeService,
              private router: Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryExternalComponent>) {
    this.angForm = this.fb.group({
      NameCategoryStakExternal: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
   CreatecategoryExternal(){
    this.stakeService.CreateCategoryExternal(this.data).subscribe(
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
