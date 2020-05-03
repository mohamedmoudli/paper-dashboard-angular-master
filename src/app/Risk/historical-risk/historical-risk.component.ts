import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-historical-risk',
  templateUrl: './historical-risk.component.html',
  styleUrls: ['./historical-risk.component.css']
})
export class HistoricalRiskComponent implements OnInit {
  historique : any;
  public hidder = ["id" , "Criticite", "decision" , "strategique" , "processus" , "Etat risque" , "Commentaire" ,"num action" , "date"];
  constructor(private riskService: RiskService,
              private router: Router) { }

  ngOnInit(): void {
    this.riskService.gethistoricalRisk()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }
}
