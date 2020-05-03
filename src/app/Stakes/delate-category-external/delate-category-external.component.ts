import {Component, Inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-delate-category-external',
  templateUrl: './delate-category-external.component.html',
  styleUrls: ['./delate-category-external.component.css']
})
export class DelateCategoryExternalComponent implements OnInit {
  categoryExtern : any;

  constructor(private stakeService: StakeService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryExternalComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.stakeService.delateCategoryExternal(this.id).subscribe((data) => {
      console.log("ffffffffff");
      this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
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
}
