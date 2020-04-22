import { Component, OnInit } from '@angular/core';
import {ProcessusService} from '../../Services/Périmetre/processus.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {RisqueService} from '../../Services/Risque/risque.service';
import {EnjeuRiqueComponent} from '../enjeu-rique/enjeu-rique.component';
import {PIpertinanteComponent} from '../pipertinante/pipertinante.component';

@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements OnInit {
  public animal: string;
  users: any ;
  risque: any ;
  Enjeu: any ;


  public hidder = ["id", "CategorieRisque" , "description" , "court term" , "moyen term" , "long term" ,
    "date d'indentification" , "cause" , "consequence" , "gravite" , "probabilité" , "detectabilité" , "creticité" , "decision" ,
    'strategique' , "process lié" , "N action" , "etat risque" , "commentaire"];
  constructor(private risqueService: RisqueService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {

    this.risqueService.getRisque()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });
    this.risqueService.getEnjeu()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });

}



  public affficheEnjeux(): void {

    const dialogRef = this.dialog.open(EnjeuRiqueComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  public afffichePIpertinante(): void {

    const dialogRef = this.dialog.open(PIpertinanteComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  saveHistoriqueRisque(){
    this.risqueService.saveHistoriqueRisque()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }
}

