import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateCategorieRisqueComponent} from '../create-categorie-risque/create-categorie-risque.component';
import {DelateCategorieRisqueComponent} from '../delate-categorie-risque/delate-categorie-risque.component';
import {DelateStrategiqueRisqueComponent} from '../delate-strategique-risque/delate-strategique-risque.component';
import {CreateStrategiqueRisqueComponent} from '../create-strategique-risque/create-strategique-risque.component';

@Component({
  selector: 'app-strategique-risque',
  templateUrl: './strategique-risque.component.html',
  styleUrls: ['./strategique-risque.component.css']
})
export class StrategiqueRisqueComponent implements OnInit {

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
  constructor( private risqueService: RisqueService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.risqueService.getStrategiqueRisque()
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




  public ajouterCategoriedialog(): void {

    const dialogRef = this.dialog.open(CreateStrategiqueRisqueComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateStrategique(id): void {

    const dialogRef = this.dialog.open(DelateStrategiqueRisqueComponent, {
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
