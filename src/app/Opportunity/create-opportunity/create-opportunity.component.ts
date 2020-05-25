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
  Strategic: any ;
  Process: any ;
  StateOpportunity: any;
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

        this.StateOpportunity = data['hydra:member'];
        console.log(this.StateOpportunity);

      },error => {
        console.log(false);
      });

    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategic = data['hydra:member'];
        console.log(this.Strategic);

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
        return this.router.navigate(['Opportunite'])
        console.log(error);

        return error;
      }
    )
  }
}
