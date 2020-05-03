import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.css']
})
export class CreateRiskComponent implements OnInit {

  categorierisque: any ;
  Strategique: any ;
  Process: any ;
  EtatRisque: any;
  constructor(private riskService: RiskService,
              private router: Router) { }

  ngOnInit(): void {
    this.riskService.getCategoryRisk()
      .subscribe((data) => {

        this.categorierisque = data['hydra:member'];
        console.log(this.categorierisque);

      },error => {
        console.log(false);
      });
    this.riskService.getStateRisk()
      .subscribe((data) => {

        this.EtatRisque = data['hydra:member'];
        console.log(this.EtatRisque);

      },error => {
        console.log(false);
      });

    this.riskService.getStrategicRisk()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.riskService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  ajouterrisque(data){
    console.log(data);
    this.riskService.saveRisk(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
      },error => {

        console.log(error);

        return error;
      }
    )
  }

}
