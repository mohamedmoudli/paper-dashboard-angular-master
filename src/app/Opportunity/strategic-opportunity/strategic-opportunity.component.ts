import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DelateStrategicOpportunityComponent} from '../delate-strategic-opportunity/delate-strategic-opportunity.component';
import {CreateStrategicOpportunityComponent} from '../create-strategic-opportunity/create-strategic-opportunity.component';

@Component({
  selector: 'app-strategic-opportunity',
  templateUrl: './strategic-opportunity.component.html',
  styleUrls: ['./strategic-opportunity.component.css']
})
export class StrategicOpportunityComponent implements OnInit {

  public StrategicOpportunity = [];

  public hidder = ["id" , "nom strategic"];
  public test = false;

  constructor( private opportunityService: OpportunityService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.opportunityService.getStrategicOpportunity()
      .subscribe((data) => {

        this.StrategicOpportunity = data['hydra:member'];
        console.log(this.StrategicOpportunity);
      },error => {
        console.log(false);
      });
    this.opportunityService.castOpportunity.subscribe( Opportunity => this.StrategicOpportunity = Opportunity);
  }







  public CreateStrategicOpportunity(): void {
    this.charingTheStrategicOpportunity();
    const dialogRef = this.dialog.open(CreateStrategicOpportunityComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateStrategic(data): void {
    this.charingTheStrategicOpportunity();
    const dialogRef = this.dialog.open(DelateStrategicOpportunityComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  charingTheStrategicOpportunity(){
    this.opportunityService.charingOpportunity(this.StrategicOpportunity);
  }

}
