import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateStrategiqueRisqueComponent} from '../../Risque/create-strategique-risque/create-strategique-risque.component';
import {DelateStrategiqueRisqueComponent} from '../../Risque/delate-strategique-risque/delate-strategique-risque.component';
import {CreateStrategiqueOpportuniteComponent} from '../create-strategique-opportunite/create-strategique-opportunite.component';
import {DelateStrategiqueOpportuniteComponent} from '../delate-strategique-opportunite/delate-strategique-opportunite.component';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-strategique-opportunite',
  templateUrl: './strategique-opportunite.component.html',
  styleUrls: ['./strategique-opportunite.component.css']
})
export class StrategiqueOpportuniteComponent implements OnInit {

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
  constructor( private opportuniteService: OpportuniteService,
               private router:Router , private dialog: MatDialog) {}



  public ngOnInit() {
    this.opportuniteService.getStrategicOpportunity()
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

    const dialogRef = this.dialog.open(CreateStrategiqueOpportuniteComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public delateStrategique(id): void {

    const dialogRef = this.dialog.open(DelateStrategiqueOpportuniteComponent, {
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
