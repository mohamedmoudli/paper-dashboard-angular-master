import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateProcessComponent} from '../create-process/create-process.component';
import {DelateProcessComponent} from '../delate-process/delate-process.component';
import {ProcessService} from '../../Services/Process/process.service';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  public animal: string;
  perimetre : any;
  politique: any;
  affichepolitique : any;
  afficheperimetre : any;
  users: any ;
  perimetre1: any ;
  public hidder = ["Processus", "indicateur de performance" , "pilote"];
  constructor(private processService : ProcessService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.affichepolitique = localStorage.getItem('politique');
    this.afficheperimetre = localStorage.getItem('perimetre');

    this.processService.getprocess()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });

    this.processService.getperimetre()
      .subscribe((data) => {

        console.log(data);
        this.perimetre1 = data['hydra:member'];
        console.log(this.perimetre1);

      }, error => {
        console.log(false);
      });
  }

  public CreateProcess(): void {

    const dialogRef = this.dialog.open(CreateProcessComponent, {
      width: "500px",
      height: "450px",

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


  public delateProcess(id): void {

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
