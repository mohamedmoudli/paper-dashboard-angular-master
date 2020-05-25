import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.css']
})
export class CreateRiskComponent implements OnInit {

  categoryrisk: any ;
  Strategic: any ;
  Process: any ;
  StateRisk: any;
  constructor(private riskService: RiskService,
              private router: Router) { }

  ngOnInit(): void {
    this.riskService.getCategoryRisk()
      .subscribe((data) => {

        this.categoryrisk = data['hydra:member'];
        console.log(this.categoryrisk);

      },error => {
        console.log(false);
      });
    this.riskService.getStateRisk()
      .subscribe((data) => {

        this.StateRisk = data['hydra:member'];
        console.log(this.StateRisk);

      },error => {
        console.log(false);
      });

    this.riskService.getStrategicRisk()
      .subscribe((data) => {

        this.Strategic = data['hydra:member'];
        console.log(this.Strategic);

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

  CreateRisk(data){
    console.log(data);
    this.riskService.saveRisk(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        this.router.navigate(['risque'])
      },error => {
        this.router.navigate(['risque'])
        console.log(error);

        return error;
      }
    )
  }

}
