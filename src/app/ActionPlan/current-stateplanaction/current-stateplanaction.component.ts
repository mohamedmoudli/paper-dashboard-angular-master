import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategicOpportunityComponent} from '../../Opportunity/create-strategic-opportunity/create-strategic-opportunity.component';
import {DelateStrategicOpportunityComponent} from '../../Opportunity/delate-strategic-opportunity/delate-strategic-opportunity.component';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';
import {CreateCurrentStateplanactionComponent} from '../create-current-stateplanaction/create-current-stateplanaction.component';
import {DelateCurrentStateplanactionComponent} from '../delate-current-stateplanaction/delate-current-stateplanaction.component';

@Component({
  selector: 'app-current-stateplanaction',
  templateUrl: './current-stateplanaction.component.html',
  styleUrls: ['./current-stateplanaction.component.css']
})
export class CurrentStateplanactionComponent implements OnInit {
  med: any;
  public animal: string;
  public fisrtname;
  public CurrentState: any;
  public dataSource = new MatTableDataSource(this.CurrentState);
  public hidder : string[] = [ 'id', 'NameCategory'];
  public test = false;

  constructor( private actionPlanService : ActionPlanService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.actionPlanService.getCurrentStateplanaction()
      .subscribe((data) => {

        this.CurrentState = data['hydra:member'];
        console.log(this.CurrentState);
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
    this.CurrentState = this.CurrentState.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateCurrentState(): void {

    const dialogRef = this.dialog.open(CreateCurrentStateplanactionComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCurrentState(id): void {

    const dialogRef = this.dialog.open(DelateCurrentStateplanactionComponent, {
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
