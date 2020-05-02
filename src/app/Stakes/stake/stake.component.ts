import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EnjeuForceComponent} from '../../Enjeux/Create-enjeu-intern/enjeu-force.component';
import {AjouterEnjeuComponent} from '../../Enjeux/Create-enjeu-extern/ajouter-enjeu.component';
import {CreateCategorieComponent} from '../../Enjeux/create-categorie-intern/create-categorie.component';
import {CreateCategorieExternComponent} from '../../Enjeux/create-categorie-extern/create-categorie-extern.component';
import {HelpProcessComponent} from '../../Enjeux/help-process/help-process.component';
import {DefinitionEnjeuxComponent} from '../../Enjeux/definition-enjeux/definition-enjeux.component';
import {DelateenjeuComponent} from '../../Enjeux/delateenjeu/delateenjeu.component';
import {CreateCategoryExternalComponent} from '../create-category-external/create-category-external.component';
import {CreateCategoryInternalComponent} from '../create-category-internal/create-category-internal.component';
import {CreateStakeInternalComponent} from '../create-stake-internal/create-stake-internal.component';
import {CreateStakeExternalComponent} from '../create-stake-external/create-stake-external.component';

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
  constructor(private enjeuxservice : EnjeuService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.enjeuxservice.getCategoryByStake()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });

    this.enjeuxservice.getCategoryExternalByStake()
      .subscribe((data) => {

        console.log(data);
        this.usersExtern = data;
        console.log(this.usersExtern);
      }, error => {
        console.log(false);
      });

    this.enjeuxservice.getCountType()
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


    this.enjeuxservice.getStake()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });
  }

  public ajouterEnjeuxintern(): void {

    const dialogRef = this.dialog.open(CreateStakeInternalComponent, {
      width: "500px",
      height: "400px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public ajouterEnjeuxExtern(): void {

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

    const dialogRef = this.dialog.open(CreateCategorieComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public ajouterCategoriesExtern(): void {

    const dialogRef = this.dialog.open(CreateCategorieExternComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  help(){
    const dialogRef = this.dialog.open(HelpProcessComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  definition(){
    const dialogRef = this.dialog.open(DefinitionEnjeuxComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }



  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateenjeuComponent, {
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
