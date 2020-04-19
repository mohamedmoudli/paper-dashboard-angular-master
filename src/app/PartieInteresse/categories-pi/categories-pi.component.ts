import { Component, OnInit } from '@angular/core';

import {AuthentificationService} from '../../Login/authentification.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {AjouterCategoriesPIComponent} from '../Create-categories-pi/ajouter-categories-pi.component';
import {CreateCategorieExternComponent} from '../../Enjeux/create-categorie-extern/create-categorie-extern.component';
import {DelateExigencePIComponent} from '../delate-exigence-pi/delate-exigence-pi.component';
import {DelateCategoriesPIComponent} from '../delate-categories-pi/delate-categories-pi.component';

@Component({
  selector: 'app-categories-pi',
  templateUrl: './categories-pi.component.html',
  styleUrls: ['./categories-pi.component.css']
})
export class CategoriesPIComponent implements OnInit {
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


  constructor( private partieinteresse: PartieinteresseService,
              private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.partieinteresse.getCategoriesPI()
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

    const dialogRef = this.dialog.open(AjouterCategoriesPIComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateCategoriesPIComponent, {
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
