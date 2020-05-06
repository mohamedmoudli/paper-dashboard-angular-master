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
  users:any;
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
    this.stakeService.cast.subscribe(user=> this.users = user);
    console.log(this.users);
  }
   CreatecategoryExternal(){
     this.editTheUser();
    this.stakeService.CreateCategoryExternal(this.data).subscribe(
      resp=>{
        console.log(this.users);
        this.users = this.users.push(this.data);
        console.log(this.users);
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
    this.stakeService.editUser(this.users);

  }
}
