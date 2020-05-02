import {Component, Inject, OnInit} from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-exigence-pi',
  templateUrl: './delate-exigence-pi.component.html',
  styleUrls: ['./delate-exigence-pi.component.css']
})
export class DelateExigencePIComponent implements OnInit {

  constructor(private partieinteresse: PartieinteresseService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateExigencePIComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }
  public supp() {

    this.partieinteresse.deleteExigency(this.id).subscribe((data) => {
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
