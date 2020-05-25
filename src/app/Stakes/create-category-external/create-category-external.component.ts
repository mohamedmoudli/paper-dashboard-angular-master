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
  CategoryExternal:any;
  itemCategory:any;
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
    this.stakeService.cast.subscribe(user=> this.CategoryExternal = user);
    console.log(this.CategoryExternal);
  }
   CreatecategoryExternal(){
     this.editTheUser();
    this.stakeService.CreateCategoryExternal(this.data).subscribe(
      resp=>{
        console.log(this.CategoryExternal);
        this.CategoryExternal = this.CategoryExternal.push(this.data);
        console.log(this.CategoryExternal);
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
  editTheUser(){
    this.stakeService.editUser(this.CategoryExternal);

  }
}
