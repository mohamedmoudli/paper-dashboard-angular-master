import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-help-risk',
  templateUrl: './help-risk.component.html',
  styleUrls: ['./help-risk.component.css']
})
export class HelpRiskComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<HelpRiskComponent>) { }
  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  IdentificationRisk(){
    alert('veuiller consulter les enjeux et les parties intéressées à travers les boutons déjà insérés au- dessus du tableau' +
      'veuiller consulter les résultas des évaluations qui nécessitent  unes étude de risque ( audits internes , audits clients, résultas de risque projets)afin d identifier vos risques')
  }
  IdentificationCause(){
    alert('5 pourquoi?' +
      'partir de l effet constaté- en l occurence le problème- et remonter vers la cause racine par une succession de question pourquoi?' +
      'Noeud de papillon\n' +
      '  il est de visualise concrètement des scénarios d accidents qui pourraient survenir en partant des causes initiales de l accident jusqu aux\n' +
      '  conséquences au niveau des cibles identifiées')
  }
  FormulationRisk(){
    alert('le facteur touche à quel evènement et mène à quelle conséquence')
  }

}
