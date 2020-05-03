import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';

import {MatDialog} from '@angular/material/dialog';
import {AjouterGuideUtilisationComponent} from '../ajouter-guide-utilisation/ajouter-guide-utilisation.component';
import {DelatecategorieExternComponent} from '../../Enjeux/delatecategorie-extern/delatecategorie-extern.component';
import {DelateGuideComponent} from '../delate-guide/delate-guide.component';

@Component({
  selector: 'app-guideutilisation',
  templateUrl: './guideutilisation.component.html',
  styleUrls: ['./guideutilisation.component.css']
})
export class GuideutilisationComponent implements OnInit {
  public animal: string;
  users: any ;
  public hidder = ["nom", "role" , "organisation"];
  constructor(private guideutilisation : GuideutilisationService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.guideutilisation.getGuideUtilisation()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }

  public CreateGuideDeUtilisation(): void {

    const dialogRef = this.dialog.open(AjouterGuideUtilisationComponent , {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateCategorie(id): void {

    const dialogRef = this.dialog.open(DelateGuideComponent, {
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
