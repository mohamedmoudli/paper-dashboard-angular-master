import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {DelateHistoricalObjectiveComponent} from '../../Objective/delate-historical-objective/delate-historical-objective.component';
import {MatDialog} from '@angular/material/dialog';
import {DelateHistoricalOpportunityComponent} from '../delate-historical-opportunity/delate-historical-opportunity.component';

@Component({
  selector: 'app-historical-opportunity',
  templateUrl: './historical-opportunity.component.html',
  styleUrls: ['./historical-opportunity.component.css']
})
export class HistoricalOpportunityComponent implements OnInit {
  historique : any;
  public animal: string;
  public data = {
    Strategique: ''
  };
  p:number = 1;
  public hidder = ["id" , "Etat " , "Commentaire" ,"num action" , "date"];
  constructor(private opportunityService: OpportunityService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.opportunityService.gethistoricalOpportunity()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
    this.opportunityService.castOpportunity.subscribe( Opportunity => this.historique = Opportunity);
  }

  public delateHistoricalOpportunity(data): void {
    this.charingTheHistoricalOpportunity();
    const dialogRef = this.dialog.open(DelateHistoricalOpportunityComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  charingTheHistoricalOpportunity(){
    this.opportunityService.charingOpportunity(this.historique);
  }

  public CreateRole() {
    const role = localStorage.getItem('role');
    if ( role == 'ROLE_SUPERADMIN') {
      return true;
    }
  }
}
