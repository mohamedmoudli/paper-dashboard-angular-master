import {Component, Inject, OnInit} from '@angular/core';
import {RiskService} from '../../Services/Risk/risk.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-state-risk',
  templateUrl: './delate-state-risk.component.html',
  styleUrls: ['./delate-state-risk.component.css']
})
export class DelateStateRiskComponent implements OnInit {



  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStateRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.riskService.delateStateRisk(this.id).subscribe((data) => {
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
