import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AjouterCategoriesPIComponent} from '../../PartieInteresse/Create-categories-pi/ajouter-categories-pi.component';
import {DelateCategoriesPIComponent} from '../../PartieInteresse/delate-categories-pi/delate-categories-pi.component';
import {RisqueService} from '../../Services/Risque/risque.service';
import {CreateCategorieRisqueComponent} from '../create-categorie-risque/create-categorie-risque.component';
import {DelateCategorieRisqueComponent} from '../delate-categorie-risque/delate-categorie-risque.component';

@Component({
  selector: 'app-categorie-risque',
  templateUrl: './categorie-risque.component.html',
  styleUrls: ['./categorie-risque.component.css']
})
export class CategorieRisqueComponent implements OnInit {

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
    this.risqueService.getCategoryRisk()
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

    const dialogRef = this.dialog.open(CreateCategorieRisqueComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateCategorieRisqueComponent, {
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
