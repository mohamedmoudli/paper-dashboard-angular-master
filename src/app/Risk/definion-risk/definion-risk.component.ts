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
  DefinitionRisk(){
    alert('possibilité de survenance d un dommage résultant d une exposition à un phénomène dangereux')
  }
  DefinitionGravity(){
    alert('l impact des conséquences')
  }
  DefinitionProbability(){
    alert('la probabilté d apparition du risque')
  }
  DefinitionDetectability(){
    alert('la capacité de détecter le risque avant son apparition')
  }
  DefinitionCriticity(){
    alert('la criticité est une échelle de mesure du risque permettant de décider à propos l acceptabilité du risque')
  }

}
