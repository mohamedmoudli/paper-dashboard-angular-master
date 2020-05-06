import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {DelateCategoryInterestedPartyComponent} from '../delate-category-interested-party/delate-category-interested-party.component';
import {CreateCategoryInterestedPartyComponent} from '../create-category-interested-party/create-category-interested-party.component';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-category-interested-party',
  templateUrl: './category-interested-party.component.html',
  styleUrls: ['./category-interested-party.component.css']
})
export class CategoryInterestedPartyComponent implements OnInit {
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


  constructor( private interestedPartyService: InterestedPartyService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.interestedPartyService.getCategoryInterestedParty()
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

    const dialogRef = this.dialog.open(CreateCategoryInterestedPartyComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategory(id): void {

    const dialogRef = this.dialog.open(DelateCategoryInterestedPartyComponent, {
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