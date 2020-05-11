import {Component, Inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-delate-strategic-risk',
  templateUrl: './delate-strategic-risk.component.html',
  styleUrls: ['./delate-strategic-risk.component.css']
})
export class DelateStrategicRiskComponent implements OnInit {
  itemStrategic : any;
  StrategicRisk : any;


  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStrategicRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.riskService.castRisk.subscribe(Risk=> this.StrategicRisk = Risk);
    console.log(this.StrategicRisk);
  }


  public delate() {
    this.riskService.delateStrategicRisk(this.data.id).subscribe((data) => {
      const index: number = this.StrategicRisk.indexOf(this.data);
      console.log(index);
      this.itemStrategic  = this.StrategicRisk.splice(index ,1);
      this.StrategicRisk = this.StrategicRisk.filter(user => user !== this.itemStrategic );
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
