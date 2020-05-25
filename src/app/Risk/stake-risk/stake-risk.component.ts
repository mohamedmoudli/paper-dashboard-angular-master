import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-stake-risk',
  templateUrl: './stake-risk.component.html',
  styleUrls: ['./stake-risk.component.css']
})
export class StakeRiskComponent implements OnInit {
  Stake: any ;
  public hidder = ["id", "description" ];

  constructor(
    public dialogRef: MatDialogRef<StakeRiskComponent>,
    @Inject(MAT_DIALOG_DATA) public id:number, private activaterouter: ActivatedRoute , private riskService: RiskService ,private router:Router) {

  }

  ngOnInit(): void {
    this.riskService.getstake()
      .subscribe((data) => {

        console.log(data);
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }


}
