import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategicRiskComponent} from '../create-strategic-risk/create-strategic-risk.component';
import {DelateStrategicRiskComponent} from '../delate-strategic-risk/delate-strategic-risk.component';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-strategic-risk',
  templateUrl: './strategic-risk.component.html',
  styleUrls: ['./strategic-risk.component.css']
})
export class StrategicRiskComponent implements OnInit {

  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public users = [];
  public dataSource = new MatTableDataSource(this.users);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private riskService: RiskService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.riskService.getStrategicRisk()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);
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
    this.users = this.users.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateStrategicRisk(): void {

    const dialogRef = this.dialog.open(CreateStrategicRiskComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateStrategic(id): void {

    const dialogRef = this.dialog.open(DelateStrategicRiskComponent, {
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
