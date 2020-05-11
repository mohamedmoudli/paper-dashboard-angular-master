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
  itemState : any;
  StateRisk : any;


  constructor(private riskService: RiskService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStateRiskComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.riskService.castRisk.subscribe(Risk=> this.StateRisk = Risk);
    console.log(this.StateRisk);
  }


  public delate() {
    this.riskService.delateStateRisk(this.data.id).subscribe((data) => {
      const index: number = this.StateRisk.indexOf(this.data);
      console.log(index);
      this.itemState  = this.StateRisk.splice(index ,1);
      this.StateRisk = this.StateRisk.filter(user => user !== this.itemState );
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
