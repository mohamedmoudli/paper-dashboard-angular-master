import {Component, Inject, OnInit} from '@angular/core';
import {RiskService} from '../../Services/Risk/risk.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-historical-risk',
  templateUrl: './delate-historical-risk.component.html',
  styleUrls: ['./delate-historical-risk.component.css']
})
export class DelateHistoricalRiskComponent implements OnInit {
  HistoricalRisk: any;
  itemHistorical: any;

  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateHistoricalRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.riskService.castRisk.subscribe(Risk=> this.HistoricalRisk = Risk);
    console.log(this.HistoricalRisk);
  }

  public delate() {
    this.riskService.delatehistoricalRisk(this.data.id).subscribe((data) => {
      const index: number = this.HistoricalRisk.indexOf(this.data);
      console.log(index);
      this.itemHistorical = this.HistoricalRisk.splice(index ,1);
      this.HistoricalRisk = this.HistoricalRisk.filter(user => user !== this.itemHistorical);
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
