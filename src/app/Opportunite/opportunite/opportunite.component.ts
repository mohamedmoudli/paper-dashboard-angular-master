import { Component, OnInit } from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {EnjeuRiqueComponent} from '../../Risque/enjeu-rique/enjeu-rique.component';
import {ReevaluerOpportuniteComponent} from '../reevaluer-opportunite/reevaluer-opportunite.component';
import {PIpertinanteComponent} from '../../Risque/pipertinante/pipertinante.component';
import {DefinitionOpportuniteComponent} from '../definition-opportunite/definition-opportunite.component';
import {AideOpportuniteComponent} from '../aide-opportunite/aide-opportunite.component';

@Component({
  selector: 'app-opportunite',
  templateUrl: './opportunite.component.html',
  styleUrls: ['./opportunite.component.css']
})
export class OpportuniteComponent implements OnInit {
  opportunite : any;
  Enjeu : any;
  animal : any;
  public hidder = ["id", "CategorieRisque" , "description" , "court term" , "moyen term" , "long term" ,
    "date d'indentification" , "Coherence" , "Allignement" , "Presence" , "Competences" , "Continute" , "Gain" , "Efforts" ,
    "Aventages" , "Poids" , "Decision" , "Stategique" , "process lié" , "N action" , "etat risque" ,
    "Efforts" ,"Aventages" ,"Poids" ,"Decision" , "Stategique" , "process lié" , "N action" , "etat risque" , "commentaire"];

  constructor(private opportuniteService: OpportuniteService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.opportuniteService.getOpportunite()
      .subscribe((data) => {

        console.log(data);
        this.opportunite = data;
        console.log(this.opportunite);
      }, error => {
        console.log(false);
      });
    this.opportuniteService.getEnjeu()
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
  saveHistoriqueOpportunite(){
    this.opportuniteService.saveHistoriqueOpportunite()
      .subscribe((data) => {

        console.log(data);

      }, error => {
        console.log(false);
      });
  }
  reevaluerOpportunite(id){
    const dialogRef = this.dialog.open(ReevaluerOpportuniteComponent, {
      width: "300px",
      height: "300px",
      data:id
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  definitionOpportunite(){
    const dialogRef = this.dialog.open(DefinitionOpportuniteComponent, {
      width: "300px",
      height: "300px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  helpOpportunite(){
    const dialogRef = this.dialog.open(AideOpportuniteComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
