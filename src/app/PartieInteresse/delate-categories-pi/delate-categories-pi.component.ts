import {Component, Inject, OnInit} from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-categories-pi',
  templateUrl: './delate-categories-pi.component.html',
  styleUrls: ['./delate-categories-pi.component.css']
})
export class DelateCategoriesPIComponent implements OnInit {

  constructor(private partieinteresse: PartieinteresseService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoriesPIComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.partieinteresse.deletCategories(this.id).subscribe((data) => {
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
