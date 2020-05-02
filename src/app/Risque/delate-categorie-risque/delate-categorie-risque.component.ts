import {Component, Inject, OnInit} from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RisqueService} from '../../Services/Risque/risque.service';

@Component({
  selector: 'app-delate-categorie-risque',
  templateUrl: './delate-categorie-risque.component.html',
  styleUrls: ['./delate-categorie-risque.component.css']
})
export class DelateCategorieRisqueComponent implements OnInit {


  constructor(private risqueService: RisqueService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategorieRisqueComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.risqueService.delateCategoryRisk(this.id).subscribe((data) => {
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
