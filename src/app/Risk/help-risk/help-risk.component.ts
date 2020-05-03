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
  DefinitionRisque(){}
  DefinitionGravite(){}
  DefinitionProbabilite(){}
  DefinitionDetectabilite(){}
  DefinitionCriticite(){}
}
