import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-opportunite',
  templateUrl: './definition-opportunite.component.html',
  styleUrls: ['./definition-opportunite.component.css']
})
export class DefinitionOpportuniteComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionOpportuniteComponent>) { }

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
