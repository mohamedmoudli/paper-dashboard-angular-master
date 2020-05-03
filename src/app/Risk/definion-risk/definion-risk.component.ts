import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-definion-risk',
  templateUrl: './definion-risk.component.html',
  styleUrls: ['./definion-risk.component.css']
})
export class DefinionRiskComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinionRiskComponent>) { }

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
