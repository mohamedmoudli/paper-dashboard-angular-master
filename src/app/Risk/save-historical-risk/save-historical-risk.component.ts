import { Component, OnInit } from '@angular/core';
import {RiskService} from '../../Services/Risk/risk.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-save-historical-risk',
  templateUrl: './save-historical-risk.component.html',
  styleUrls: ['./save-historical-risk.component.css']
})
export class SaveHistoricalRiskComponent implements OnInit {

  constructor(private riskService: RiskService, private router: Router ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<SaveHistoricalRiskComponent>) { }

  ngOnInit(): void {
  }
  saveHistoricalRisk(){
    this.riskService.savehistoricalRisk()
      .subscribe((data) => {
      this.onNoClick();
      }, error => {
        console.log(false);
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
