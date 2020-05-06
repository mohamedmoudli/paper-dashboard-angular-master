import {Component, Inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-delate-category-risk',
  templateUrl: './delate-category-risk.component.html',
  styleUrls: ['./delate-category-risk.component.css']
})
export class DelateCategoryRiskComponent implements OnInit {


  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.riskService.delateCategoryRisk(this.id).subscribe((data) => {
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