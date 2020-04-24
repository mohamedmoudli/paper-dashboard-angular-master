import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';
import {ObjectiveService} from '../../Services/Objective/objective.service';

@Component({
  selector: 'app-create-objectif',
  templateUrl: './create-objectif.component.html',
  styleUrls: ['./create-objectif.component.css']
})
export class CreateObjectifComponent implements OnInit {
  categorieOpportunite: any ;
  Strategique: any ;
  Process: any ;
  Enjeu: any;
  IndicateurPredefini: any;
  public data = {
    idEnjeu: '',
    idprocess: '',
    Description: '',
    Temps1: '',
    Temps2: '',
    Temps3: '',
    Temps4: '',
    Temps2020: '',
    Temps2021: '',
    IndicateurPredefini: '',
    IndicateurPerformance: '',
    ObjectiveAAtendre: '',
    EtatInitial: '',
    EtatActuel: '',
    EtatActuelIndiacteur: '',
    Commentaire: ''
  };
  constructor(private objectiveService: ObjectiveService,
              private router: Router) { }

  ngOnInit(): void {

    this.objectiveService.getProcessRisque()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
    this.objectiveService.getEnjeu()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });
  }

  saveObjective(){
    console.log();
    this.objectiveService.saveObjective(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);

      },error => {

        console.log(error);

        return error;
      }
    )
  }
}
