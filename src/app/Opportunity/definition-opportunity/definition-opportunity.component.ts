import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-opportunity',
  templateUrl: './definition-opportunity.component.html',
  styleUrls: ['./definition-opportunity.component.css']
})
export class DefinitionOpportunityComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionOpportunityComponent>) { }

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
