import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {
  categoryOpportunity: any ;
  Strategique: any ;
  Process: any ;
  EtatOpportunite: any;
  constructor(private opportunityService: OpportunityService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportunityService.getCategoryOpportunity()
      .subscribe((data) => {

        this.categoryOpportunity = data['hydra:member'];
        console.log(this.categoryOpportunity);

      },error => {
        console.log(false);
      });

    this.opportunityService.getStateOpportunity()
      .subscribe((data) => {

        this.EtatOpportunite = data['hydra:member'];
        console.log(this.EtatOpportunite);

      },error => {
        console.log(false);
      });

    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.opportunityService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  CreateOpportunity(data){
    console.log(data);
    this.opportunityService.saveOpportunity(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        return this.router.navigate(['Opportunite'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }
}