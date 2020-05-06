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
  users:any;
  itemCategory:any;
  constructor(private stakeService: StakeService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryInternalComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.stakeService.cast.subscribe(user=> this.users = user);
    console.log(this.users);
  }


  public delate() {
    this.stakeService.delateCategoryInternal(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      console.log(this.users);
      const index: number = this.users.indexOf(this.data);
      console.log(index);
      this.itemCategory = this.users.splice(index ,1);
      this.users = this.users.filter(user => user !== this.itemCategory);
      console.log(this.users);
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
