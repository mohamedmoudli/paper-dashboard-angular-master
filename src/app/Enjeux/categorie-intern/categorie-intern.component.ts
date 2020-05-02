import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateCategorieRisqueComponent} from '../../Risque/create-categorie-risque/create-categorie-risque.component';
import {DelateCategorieRisqueComponent} from '../../Risque/delate-categorie-risque/delate-categorie-risque.component';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {CreateCategorieComponent} from '../create-categorie-intern/create-categorie.component';
import {DelatecategorieInternComponent} from '../delatecategorie-intern/delatecategorie-intern.component';

@Component({
  selector: 'app-categorie-intern',
  templateUrl: './categorie-intern.component.html',
  styleUrls: ['./categorie-intern.component.css']
})
export class CategorieInternComponent implements OnInit {

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
  constructor( private enjeuService: EnjeuService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.enjeuService.getCategoryInternal()
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

    const dialogRef = this.dialog.open(CreateCategorieComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelatecategorieInternComponent, {
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
