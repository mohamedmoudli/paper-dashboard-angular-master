import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {DelateCategoryRiskComponent} from '../delate-category-risk/delate-category-risk.component';
import {CreateCategoryRiskComponent} from '../create-category-risk/create-category-risk.component';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-category-risk',
  templateUrl: './category-risk.component.html',
  styleUrls: ['./category-risk.component.css']
})
export class CategoryRiskComponent implements OnInit {

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
    this.riskService.getCategoryRisk()
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




  public CreateCategory(): void {

    const dialogRef = this.dialog.open(CreateCategoryRiskComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategory(id): void {

    const dialogRef = this.dialog.open(DelateCategoryRiskComponent, {
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