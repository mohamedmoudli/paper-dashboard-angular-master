import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ActionPlanService} from '../../Services/ActionPlan/action-plan.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateCurrentStateplanactionComponent} from '../create-current-stateplanaction/create-current-stateplanaction.component';
import {DelateCurrentStateplanactionComponent} from '../delate-current-stateplanaction/delate-current-stateplanaction.component';
import {DelateStateEfficacityActionPlanComponent} from '../delate-state-efficacity-action-plan/delate-state-efficacity-action-plan.component';
import {CreateStateEfficacityActionPlanComponent} from '../create-state-efficacity-action-plan/create-state-efficacity-action-plan.component';

@Component({
  selector: 'app-state-efficacity-action-plan',
  templateUrl: './state-efficacity-action-plan.component.html',
  styleUrls: ['./state-efficacity-action-plan.component.css']
})
export class StateEfficacityActionPlanComponent implements OnInit {
  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public StateEfficacity: any;
  public dataSource = new MatTableDataSource(this.StateEfficacity);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private actionPlanService : ActionPlanService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.actionPlanService.getStateEfficacityActionPlan()
      .subscribe((data) => {

        this.StateEfficacity = data['hydra:member'];
        console.log(this.StateEfficacity);
      },error => {
        console.log(false);
      });
    this.actionPlanService.castPlanAction.subscribe(PlanAction => this.StateEfficacity = PlanAction);
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public search() {
    if (this.fisrtname != "") {

    } else if (this.fisrtname == "") {
      this.ngOnInit();
    }
    this.StateEfficacity = this.StateEfficacity.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateStateEfficacity(): void {
    this.charingTheStateEfficacity();
    const dialogRef = this.dialog.open(CreateStateEfficacityActionPlanComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateStateEfficacity(data): void {
    this.charingTheStateEfficacity();
    const dialogRef = this.dialog.open(DelateStateEfficacityActionPlanComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  charingTheStateEfficacity(){
    this.actionPlanService.charingPlanAction(this.StateEfficacity);
  }
}
