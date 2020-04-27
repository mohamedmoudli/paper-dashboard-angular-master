import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  definitionEnjeu : any;
  aideEnjeu : any;
  definitionpartieinteresse : any;
  definitionpiPertinante : any;
  definitionRisque : any;
  aideRisque : any;
  definitionOpportunite: any;
  aideOpportunite : any;
  aideObjective : any;
  aidepiPertinante : any;
  aideExigencepi : any;
  constructor() { }

  ngOnInit(): void {
  }

  savedefinitionEnjeu(){
    localStorage.setItem('definitionEnjeu' , this.definitionEnjeu)
  }
  saveaideEnjeu(){
    localStorage.setItem('aideEnjeu' , this.aideEnjeu)
  }
  savedefinitionpartieinteresse(){
    localStorage.setItem('definitionpartieinteresse' , this.definitionpartieinteresse)
  }

  savedefinitionpiPertinante(){
    localStorage.setItem('definitionpiPertinante' , this.definitionpiPertinante)
  }
  saveaidepiPertinante(){
    localStorage.setItem('aidepiPertinante' , this.aidepiPertinante)
  }
  saveaideExigencepi(){
    localStorage.setItem('aideExigencepi' , this.aideExigencepi)
  }
  savedefinitionRisque(){
    localStorage.setItem('definitionRisque' , this.definitionRisque)
  }
  saveaideRisque(){
    localStorage.setItem('aideRisque' , this.aideRisque)
  }
  savedefinitionOpportunite(){
    localStorage.setItem('definitionOpportunite' , this.definitionOpportunite)
  }
  saveaideOpportunite(){
    localStorage.setItem('aideOpportunite' , this.aideOpportunite)
  }
  saveaideObjective(){
    localStorage.setItem('aideObjective' , this.aideObjective)
  }
}
