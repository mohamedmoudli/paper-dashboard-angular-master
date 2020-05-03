import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historical-opportunity',
  templateUrl: './historical-opportunity.component.html',
  styleUrls: ['./historical-opportunity.component.css']
})
export class HistoricalOpportunityComponent implements OnInit {
  historique : any;
  public hidder = ["id" , "Etat " , "Commentaire" ,"num action" , "date"];
  constructor(private opportunityService: OpportunityService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportunityService.gethistoricalOpportunite()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }

}
