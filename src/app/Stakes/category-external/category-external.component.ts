import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {CreateCategoryExternalComponent} from '../create-category-external/create-category-external.component';
import {DelateCategoryRiskComponent} from '../../Risk/delate-category-risk/delate-category-risk.component';
import {DelateCategoryExternalComponent} from '../delate-category-external/delate-category-external.component';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-category-external',
  templateUrl: './category-external.component.html',
  styleUrls: ['./category-external.component.css']
})
export class CategoryExternalComponent implements OnInit {

  editUser:any;
  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public users : any;
  public dataSource = new MatTableDataSource(this.users);
  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""
  };
  constructor( private stakeService: StakeService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.stakeService.getCategoryExternal()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);
      },error => {
        console.log(false);
      });
    this.stakeService.cast.subscribe(user => this.users = user);
  }
  editTheUser(){
    this.stakeService.editUser(this.users);

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




  public ajouterCategoriedialog(): void {
    this.editTheUser();
    const dialogRef = this.dialog.open(CreateCategoryExternalComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategorie(data): void {
    this.editTheUser();

    const dialogRef = this.dialog.open(DelateCategoryExternalComponent, {
      width: "500px",
      height: "150px",
      data:data ,


    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

}
