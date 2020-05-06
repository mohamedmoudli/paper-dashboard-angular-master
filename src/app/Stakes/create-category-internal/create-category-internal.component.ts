import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-create-category-internal',
  templateUrl: './create-category-internal.component.html',
  styleUrls: ['./create-category-internal.component.css']
})
export class CreateCategoryInternalComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  CatstakeInternal:any;
  itemCategory:any;
  public data = {
    NameCategoryStakInternal: ''
  };

  constructor(private stakeService : StakeService,
              private router: Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryInternalComponent>) {
    this.angForm = this.fb.group({
      NameCategoryStakInternal: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.stakeService.cast.subscribe(user=> this.CatstakeInternal = user);
    console.log(this.CatstakeInternal);
  }
  CreatecategoryInternal(){
    this.stakeService.CreateCategoryinternal(this.data).subscribe(
      resp=>{
        console.log(this.CatstakeInternal);
        this.CatstakeInternal = this.CatstakeInternal.push(this.data);
        console.log(this.CatstakeInternal);
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
    this.stakeService.editUser(this.CatstakeInternal);

  }
}
