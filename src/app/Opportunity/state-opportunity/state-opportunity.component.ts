import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategicOpportunityComponent} from '../create-strategic-opportunity/create-strategic-opportunity.component';
import {DelateStrategicOpportunityComponent} from '../delate-strategic-opportunity/delate-strategic-opportunity.component';
import {CreateStateOpportunityComponent} from '../create-state-opportunity/create-state-opportunity.component';
import {DeleteStateOpportunityComponent} from '../delete-state-opportunity/delete-state-opportunity.component';

@Component({
  selector: 'app-state-opportunity',
  templateUrl: './state-opportunity.component.html',
  styleUrls: ['./state-opportunity.component.css']
})
export class StateOpportunityComponent implements OnInit {

  public stateOpportunity: any;

  public hidder = ["id" , "nom Etat"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private opportunityService: OpportunityService,
               private router:Router , private dialog: MatDialog ) {}



  public ngOnInit() {
    this.opportunityService.getStateOpportunity()
      .subscribe((data) => {

        this.stateOpportunity = data['hydra:member'];
        console.log(this.stateOpportunity);
      },error => {
        console.log(false);
      });
    this.opportunityService.castOpportunity.subscribe( Opportunity => this.stateOpportunity = Opportunity);
  }







  public CreateStateOpportunity(): void {
    this.charingTheStateOpportunity();
    const dialogRef = this.dialog.open(CreateStateOpportunityComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateStateOpportunity(data): void {
    this.charingTheStateOpportunity();
    const dialogRef = this.dialog.open(DeleteStateOpportunityComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  charingTheStateOpportunity(){
    this.opportunityService.charingOpportunity(this.stateOpportunity);
  }

}
