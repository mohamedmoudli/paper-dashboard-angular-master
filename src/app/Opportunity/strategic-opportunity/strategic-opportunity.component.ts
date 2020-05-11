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

  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public StrategicOpportunity = [];
  public dataSource = new MatTableDataSource(this.StrategicOpportunity);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
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


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public search() {
    if (this.fisrtname != "") {

    } else if (this.fisrtname == "") {
      this.ngOnInit();
    }
    this.StrategicOpportunity = this.StrategicOpportunity.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateStrategicOpportunity(): void {
    this.charingTheStrategicOpportunity();
    const dialogRef = this.dialog.open(CreateStrategicOpportunityComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
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
      this.animal = result;
    });
  }

  charingTheStrategicOpportunity(){
    this.opportunityService.charingOpportunity(this.StrategicOpportunity);
  }

}
