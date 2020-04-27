import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-risque',
  templateUrl: './definition-risque.component.html',
  styleUrls: ['./definition-risque.component.css']
})
export class DefinitionRisqueComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionRisqueComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  DefinitionRisque(){}
  DefinitionGravite(){}
  DefinitionProbabilite(){}
  DefinitionDetectabilite(){}
  DefinitionCriticite(){}

}
