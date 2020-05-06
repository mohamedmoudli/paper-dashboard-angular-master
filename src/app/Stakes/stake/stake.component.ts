import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateCategoryExternalComponent} from '../create-category-external/create-category-external.component';
import {CreateCategoryInternalComponent} from '../create-category-internal/create-category-internal.component';
import {CreateStakeInternalComponent} from '../create-stake-internal/create-stake-internal.component';
import {CreateStakeExternalComponent} from '../create-stake-external/create-stake-external.component';
import {HelpProcessComponent} from '../../Process/help-process/help-process.component';
import {HelpStakeComponent} from '../help-stake/help-stake.component';
import {DefinitionStakeComponent} from '../definition-stake/definition-stake.component';
import {DelateStakeComponent} from '../delate-stake/delate-stake.component';
import {StakeService} from '../../Services/Stake/stake.service';

@Component({
  selector: 'app-stake',
  templateUrl: './stake.component.html',
  styleUrls: ['./stake.component.css']
})
export class StakeComponent implements OnInit {

  public animal: string;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public data1 = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.data1, label: 'NOMBRE DE PI PAR CATEGORIES'},

  ];

  users: any ;
  usersExtern: any ;
  Enjeu: any ;
  Type : any ;
  public hidder = ["id", "description" ];
  public hidderType = ["type", "nombre" ];
  constructor(private stakeService : StakeService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.stakeService.getCategoryByStake()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });

    this.stakeService.getCategoryExternalByStake()
      .subscribe((data) => {

        console.log(data);
        this.usersExtern = data;
        console.log(this.usersExtern);
      }, error => {
        console.log(false);
      });

    this.stakeService.getCountType()
      .subscribe((data) => {

        this.Type = data;
        for (let element of this.Type) {
          this.barChartLabels.push(element.Type);
          this.data1.push(element.nbre);

          console.log(this.data1);
          console.log(data);
        }
      }, error => {
        console.log(false);
      });


    this.stakeService.getStake()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });
    this.stakeService.cast.subscribe(user => this.usersExtern = user);
  }

  public CreateStakeInternal(): void {

    const dialogRef = this.dialog.open(CreateStakeInternalComponent, {
      width: "500px",
      height: "400px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public CreateStakeExternal(): void {
    this.editTheUser();
    const dialogRef = this.dialog.open(CreateStakeExternalComponent, {
      width: "500px",
      height: "400px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public ajouterCategoriesIntern(): void {

    const dialogRef = this.dialog.open(CreateCategoryInternalComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public ajouterCategoriesExtern(): void {

    const dialogRef = this.dialog.open(CreateCategoryExternalComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  help(){
    const dialogRef = this.dialog.open(HelpStakeComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  definition(){
    const dialogRef = this.dialog.open(DefinitionStakeComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }



  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateStakeComponent, {
      width: "500px",
      height: "150px",
      data:id

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  editTheUser(){
    this.stakeService.editUser(this.usersExtern);

  }
}