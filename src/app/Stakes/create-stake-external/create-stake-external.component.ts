import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-create-stake-external',
  templateUrl: './create-stake-external.component.html',
  styleUrls: ['./create-stake-external.component.css']
})
export class CreateStakeExternalComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  stake : any;
  itemCategory:any;
  public data = {
    Description: '',
    Type: '',
    CategoryStakeExternal: ''
  };
  public users = [];
  public Type = [];
  constructor(private stakeService: StakeService,
              private router:Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStakeExternalComponent>) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      CategoryStakeExternal: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {
    this.stakeService.cast.subscribe(user=> this.stake = user);
    console.log(this.stake);

    this.stakeService.getCategoryExternal()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });




    this.stakeService.getTypeStake()
      .subscribe((data) => {

        this.Type = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });
  }


  CreateStakeExternal(){
    this.editTheUser();
    this.stakeService.saveStake(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(this.users);

        console.log(this.stake);
        this.stake = this.stake.push( { id: 28 , Description: "ddddddd"} );
        console.log(this.stake);

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
    this.stakeService.editUser(this.stake);

  }
}
