import { Component, OnInit } from '@angular/core';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';
import {Router} from '@angular/router';
import {ProcessusService} from '../../Services/Périmetre/processus.service';
import {EnjeuRiqueComponent} from '../../Risque/enjeu-rique/enjeu-rique.component';
import {MatDialog} from '@angular/material/dialog';
import {AjouterprocessusComponent} from '../Create-processus/ajouterprocessus.component';
import {PerimtrepolitiqueComponent} from '../perimtrepolitique/perimtrepolitique.component';
import {DelatecategorieExternComponent} from '../../Enjeux/delatecategorie-extern/delatecategorie-extern.component';
import {DelateProcessComponent} from '../delate-process/delate-process.component';

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent implements OnInit {
  public animal: string;
  perimetre : any;
  politique: any;
  affichepolitique : any;
  afficheperimetre : any;
  users: any ;
  perimetre1: any ;
  public hidder = ["Processus", "indicateur de performance" , "pilote"];
  constructor(private processusService : ProcessusService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.affichepolitique = localStorage.getItem('politique');
    this.afficheperimetre = localStorage.getItem('perimetre');

    this.processusService.getprocessus()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });

    this.processusService.getperimetre()
      .subscribe((data) => {

        console.log(data);
        this.perimetre1 = data['hydra:member'];
        console.log(this.perimetre1);

      }, error => {
        console.log(false);
      });
  }

  public CreateProcess(): void {

    const dialogRef = this.dialog.open(AjouterprocessusComponent, {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public updateperimetre(id): void {

    const dialogRef = this.dialog.open(PerimtrepolitiqueComponent, {
      width: "500px",
      height: "450px",
      data:id
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  afficher(){
    alert('A prendre en compte :' +
      '-Prendre en compte les enjeu intern et externes'
      )
  }


  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateProcessComponent, {
      width: "500px",
      height: "150px",
      data:id

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  savepolitique(){
    localStorage.setItem('politique' , this.politique)
  }
  saveperimetre(){
    localStorage.setItem('perimetre' , this.perimetre)
  }
}
