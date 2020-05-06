import {Component, Inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';
import {CategoryExternalComponent} from '../category-external/category-external.component';

@Component({
  selector: 'app-delate-category-external',
  templateUrl: './delate-category-external.component.html',
  styleUrls: ['./delate-category-external.component.css']
})
export class DelateCategoryExternalComponent implements OnInit {
  categoryExtern : any;
  Stake: any;
  users:any;
  itemCategory:any;
  constructor(private stakeService: StakeService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryExternalComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.stakeService.cast.subscribe(user=> this.users = user);
    console.log(this.users);

  }



  public delate() {
    this.stakeService.delateCategoryExternal(this.data.id).subscribe((data) => {
      console.log(this.users);
      const index: number = this.users.indexOf(this.data);
      console.log(index);
      this.itemCategory = this.users.splice(index ,1);
      this.users = this.users.filter(user => user !== this.itemCategory);
      console.log(this.users);
      this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  editTheUser(){
    this.stakeService.editUser(this.users);

  }
  onNoClick(): void {
    this.editTheUser();
    this.dialogRef.close();
  }

  getCategoryExternal(){
    this.stakeService.getCategoryExternal().subscribe((data) => {
      this.categoryExtern = data;

      console.log("ffffffffff");
    }), (error) => {

      console.log("Error", error);
    };
  }
  getCategoryExternalbyid(){
    this.stakeService.getCategoryExternalbyid(this.data.id).subscribe((data) => {
      this.Stake = data;

      console.log("ffffffffff");
    }), (error) => {

      console.log("Error", error);
    };
  }
}
