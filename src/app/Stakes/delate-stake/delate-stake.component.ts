import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-delate-stake',
  templateUrl: './delate-stake.component.html',
  styleUrls: ['./delate-stake.component.css']
})
export class DelateStakeComponent implements OnInit {

  Stake: any;
  itemStake: any;
  constructor(private stakeService: StakeService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStakeComponent>,
              @Inject(MAT_DIALOG_DATA) public row:any) { }

  ngOnInit(): void {
    this.stakeService.cast.subscribe(user=> this.Stake = user);
    console.log(this.Stake);
  }


  public delate() {
    this.stakeService.delateStake(this.row.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.Stake.indexOf(this.row);
      console.log(index);
      this.itemStake = this.Stake.splice(index ,1);
      this.Stake = this.Stake.filter(user => user !== this.itemStake);
      console.log(this.Stake);
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
