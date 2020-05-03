import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-delate-category-internal',
  templateUrl: './delate-category-internal.component.html',
  styleUrls: ['./delate-category-internal.component.css']
})
export class DelateCategoryInternalComponent implements OnInit {


  constructor(private stakeService: StakeService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryInternalComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.stakeService.delateCategoryInternal(this.id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
