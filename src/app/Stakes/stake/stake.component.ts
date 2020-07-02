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
  CategoryByStake :any;

  public result: string;
  p:number = 1;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public data1 = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.data1, label: 'Nombre des enjeux par catégorie'},

  ];

  users: any ;
  usersExtern: any ;
  Stake: any ;
  Type : any ;
  public hidder = ["id", "description" ];
  public hidder1 = ["id", "description" , "actions"];
  public hidderType = ["type", "nombre" ];
  constructor(private stakeService : StakeService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.stakeService.getCategoryByStake()
      .subscribe((data) => {

        console.log(data);
        this.CategoryByStake = data;
        console.log(this.CategoryByStake);
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
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });
    this.stakeService.cast.subscribe(user => this.Stake = user);
  }



  help(){
    const dialogRef = this.dialog.open(HelpStakeComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.result = result;
    });
  }

  definition(){
    const dialogRef = this.dialog.open(DefinitionStakeComponent, {
      width: "500px",
      height: "150px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.result = result;
    });
  }



  public delateStake(row): void {
    this.charingTheStake();
    console.log(row);
    const dialogRef = this.dialog.open(DelateStakeComponent, {
      width: "500px",
      height: "150px",
      data:row

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.result = result;
    });
  }

  charingTheStake(){
    this.stakeService.editUser(this.Stake);

  }

  public CreateRole() {
    const role = localStorage.getItem('role');
    if ( role == 'ROLE_SUPERADMIN') {
      return true;
    }
  }

}
