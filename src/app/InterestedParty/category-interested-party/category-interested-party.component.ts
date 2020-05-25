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

  public name: string;
  public fisrtname;
  public CategoryinterestedParty = [];
  public dataSource = new MatTableDataSource(this.CategoryinterestedParty);
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

        this.CategoryinterestedParty = data['hydra:member'];
        console.log(this.CategoryinterestedParty);
      },error => {
        console.log(false);
      });
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty => this.CategoryinterestedParty = interestedParty);
  }







  public CreateCategory(): void {
this.charingTheCategoryInterestedParty();
    const dialogRef = this.dialog.open(CreateCategoryInterestedPartyComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }


  public delateCategory(data): void {
    this.charingTheCategoryInterestedParty();
    const dialogRef = this.dialog.open(DelateCategoryInterestedPartyComponent, {
      width: "500px",
      height: "150px",
      data:data ,

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheCategoryInterestedParty(){
    this.interestedPartyService.charingInterestedParty(this.CategoryinterestedParty);
  }
}
