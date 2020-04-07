import { Component, OnInit } from '@angular/core';

import {AuthentificationService} from '../../Login/authentification.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef} from '@angular/material/dialog';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {AjouterCategoriesPIComponent} from '../ajouter-categories-pi/ajouter-categories-pi.component';

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
              private router:Router) {}



  public ngOnInit() {
    this.partieinteresse.getCategoriesPI()
      .subscribe((data) => {

       this.users = data['hydra:member'];
       console.log(this.users);
      },error => {
        console.log(false);
      });
  }

  public supp(id) {
    console.log(id);
    this.partieinteresse.deletCategories(id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();

    }), (error) => {

      console.log("Error", error);
    };

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




  ajoutercategorie(data){
    console.log(data);
    this.partieinteresse.postCategoriesPI(data).subscribe(
      resp=>{
        console.log(resp);
        return this.router.navigate(['categoriesPI']);
      },error => {

        console.log(error);

        return error;
      }
    )
  }



  public afficher() {
    this.med = !this.med;
    console.log(this.med);
  }
}
