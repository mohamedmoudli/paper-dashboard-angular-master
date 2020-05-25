import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-opportunity',
  templateUrl: './definition-opportunity.component.html',
  styleUrls: ['./definition-opportunity.component.css']
})
export class DefinitionOpportunityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DefinitionOpportunityComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  DefinitionOpportunity(){
    alert('toute occasion favorable qui peut aboutir à l amélioration des rsultats ou des performances de l organisme')
  }
  Effort(){
    alert('le volume d effort en ressources, temps, budget... à fournir pour lui développer une réponse adéquate à l opportunité')
  }
  adventage(){
    alert('les biens d une opportunité pourra apporter à l organisation')
  }


}
