import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DelateCategoryOpportunityComponent} from '../delate-category-opportunity/delate-category-opportunity.component';
import {CreateCategoryOpportunityComponent} from '../create-category-opportunity/create-category-opportunity.component';

@Component({
  selector: 'app-category-opportunity',
  templateUrl: './category-opportunity.component.html',
  styleUrls: ['./category-opportunity.component.css']
})
export class CategoryOpportunityComponent implements OnInit {


  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public CategoryOpportunity = [];
  public dataSource = new MatTableDataSource(this.CategoryOpportunity);
  public hidder = ["id" , "nom categories"];
  public test = false;

  constructor( private opportunityService: OpportunityService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.opportunityService.getCategoryOpportunity()
      .subscribe((data) => {

        this.CategoryOpportunity = data['hydra:member'];
        console.log(this.CategoryOpportunity);
      },error => {
        console.log(false);
      });
    this.opportunityService.castOpportunity.subscribe( Opportunity => this.CategoryOpportunity = Opportunity);
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public search() {
    if (this.fisrtname != "") {

    } else if (this.fisrtname == "") {
      this.ngOnInit();
    }
    this.CategoryOpportunity = this.CategoryOpportunity.filter( (res) => {
      return res.fisrtname.toLocaleLowerCase().match(this.fisrtname.toLocaleLowerCase());
    });
  }




  public CreateCategoryOpportunity(): void {
    this.charingTheCategoryOpportunity();
    const dialogRef = this.dialog.open(CreateCategoryOpportunityComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategory(data): void {
   this.charingTheCategoryOpportunity();
    const dialogRef = this.dialog.open(DelateCategoryOpportunityComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  charingTheCategoryOpportunity(){
    this.opportunityService.charingOpportunity(this.CategoryOpportunity);
  }
}
