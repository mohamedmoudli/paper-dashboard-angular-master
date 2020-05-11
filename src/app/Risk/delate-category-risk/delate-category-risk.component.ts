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
  categoryRisk: any;
  itemcategory: any;

  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.riskService.castRisk.subscribe(Risk=> this.categoryRisk = Risk);
    console.log(this.categoryRisk);
  }

  public delate() {
    this.riskService.delateCategoryRisk(this.data.id).subscribe((data) => {
      const index: number = this.categoryRisk.indexOf(this.data);
      console.log(index);
      this.itemcategory = this.categoryRisk.splice(index ,1);
      this.categoryRisk = this.categoryRisk.filter(user => user !== this.itemcategory);
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
