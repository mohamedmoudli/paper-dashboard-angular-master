import {Component, Inject, OnInit} from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-stake',
  templateUrl: './delate-stake.component.html',
  styleUrls: ['./delate-stake.component.css']
})
export class DelateStakeComponent implements OnInit {


  constructor(private enjeuService: EnjeuService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStakeComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.enjeuService.delateStake(this.id).subscribe((data) => {
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
