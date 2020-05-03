import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-create-stake-internal',
  templateUrl: './create-stake-internal.component.html',
  styleUrls: ['./create-stake-internal.component.css']
})
export class CreateStakeInternalComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    Description: '',
    Type: '',
    CategoryStakeInternal: ''
  };
  public users = [];
  public Type = [];
  constructor(private stakeService: StakeService,
              private router:Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStakeInternalComponent>) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      CategoryStakeInternal: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {

    this.stakeService.getCategoryInternal()
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


  CreateStakeInternal(){
    this.stakeService.saveStake(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
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
