import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';

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
  public CategoryExternal = [];
  public Type = [];
  constructor(private stakeService: StakeService,
              private router:Router , private fb:FormBuilder ) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      CategoryStakeExternal: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {


    this.stakeService.getCategoryExternal()
      .subscribe((data) => {

        this.CategoryExternal = data['hydra:member'];
        console.log(this.CategoryExternal);

      },error => {
        console.log(false);
      });




    this.stakeService.getTypeStake()
      .subscribe((data) => {

        this.Type = data['hydra:member'];


      },error => {
        console.log(false);
      });
  }


  CreateStakeExternal(){

    this.stakeService.saveStake(this.data).subscribe(
      resp=>{
        console.log(resp);

        this.router.navigate(['enjeu'])

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


}
