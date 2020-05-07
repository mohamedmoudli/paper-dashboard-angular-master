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

  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public stateOpportunity: any;
  public dataSource = new MatTableDataSource(this.stateOpportunity);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private opportunityService: OpportunityService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.opportunityService.getStateOpportunity()
      .subscribe((data) => {

        this.stateOpportunity = data['hydra:member'];
        console.log(this.stateOpportunity);
      },error => {
        console.log(false);
      });
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public search() {
    if (this.fisrtname != "") {

    } else if (this.fisrtname == "") {
      this.ngOnInit();
    }
    this.stateOpportunity = this.stateOpportunity.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateStateOpportunity(): void {

    const dialogRef = this.dialog.open(CreateStateOpportunityComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateStateOpportunity(id): void {

    const dialogRef = this.dialog.open(DeleteStateOpportunityComponent, {
      width: "500px",
      height: "150px",
      data:id

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

}
