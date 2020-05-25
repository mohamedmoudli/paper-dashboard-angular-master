import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {CreateCategoryInternalComponent} from '../create-category-internal/create-category-internal.component';
import {DelateCategoryRiskComponent} from '../../Risk/delate-category-risk/delate-category-risk.component';
import {DelateCategoryInternalComponent} from '../delate-category-internal/delate-category-internal.component';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-category-internal',
  templateUrl: './category-internal.component.html',
  styleUrls: ['./category-internal.component.css']
})
export class CategoryInternalComponent implements OnInit {

  editUser:any;

  public CategoryInternal = [];

  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private stakeService: StakeService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.stakeService.getCategoryInternal()
      .subscribe((data) => {

        this.CategoryInternal = data['hydra:member'];
        console.log(this.CategoryInternal);
      },error => {
        console.log(false);
      });
    this.stakeService.cast.subscribe(user => this.CategoryInternal = user);
  }
  editTheUser(){
    this.stakeService.editUser(this.CategoryInternal);

  }






  public CreateCategoryInternal(): void {
    this.editTheUser();
    const dialogRef = this.dialog.open(CreateCategoryInternalComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateCategoryInternal(data): void {
    this.editTheUser();
    const dialogRef = this.dialog.open(DelateCategoryInternalComponent, {
      width: "500px",
      height: "150px",
      data:data ,

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
}
