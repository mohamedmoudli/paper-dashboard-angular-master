import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {AjouterprocessusComponent} from '../../Périmetre/Create-processus/ajouterprocessus.component';
import {MatDialog} from '@angular/material/dialog';
import {AjouterExigenceComponent} from '../Create-exigence/ajouter-exigence.component';
import {DelateExigencePIComponent} from '../delate-exigence-pi/delate-exigence-pi.component';

@Component({
  selector: 'app-exigeneces-pi',
  templateUrl: './exigeneces-pi.component.html',
  styleUrls: ['./exigeneces-pi.component.css']
})
export class ExigenecesPIComponent implements OnInit {
  med: any;
  public animal: string;
  public name: string;
  public fisrtname;
  public users: Object = [];

  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""


  };

  public listeExigence = [ "id" , "etat de confirmité" , "commentaire" , "N action" , "supprime"];

  constructor(private partieinteresse: PartieinteresseService,
              private router:Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.partieinteresse.getExigencePI()
      .subscribe((data) => {

        this.users = data;
        console.log(this.users);
      },error => {
        console.log(false);
      });
  }




  public supp(id) {

    this.partieinteresse.deleteExigence(id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();

    }), (error) => {

      console.log("Error", error);
    };

  }

  public afficher() {
    this.med = !this.med;
    console.log(this.med);
  }


  public CreateExigence(): void {

    const dialogRef = this.dialog.open(AjouterExigenceComponent, {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public delateExigence(id): void {

    const dialogRef = this.dialog.open(DelateExigencePIComponent, {
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
