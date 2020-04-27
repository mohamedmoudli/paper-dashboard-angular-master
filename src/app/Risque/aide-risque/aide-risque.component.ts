import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-aide-risque',
  templateUrl: './aide-risque.component.html',
  styleUrls: ['./aide-risque.component.css']
})
export class AideRisqueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AideRisqueComponent>) { }
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
