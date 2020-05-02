import {Component, Inject, OnInit} from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reevaluer-opportunite',
  templateUrl: './reevaluer-opportunite.component.html',
  styleUrls: ['./reevaluer-opportunite.component.css']
})
export class ReevaluerOpportuniteComponent implements OnInit {
  categorieOpportunite: any ;
  Strategique: any ;
  Process: any ;
  EtatOpportunite: any ;
  public data = {
    EffortReevaluation: '',
    AventageReevaluation: '',
    idstrategiqueReevaluation: '',
    idprocessReevaluation: '',
    idEtatOpportuniteReevaluation: ''
  };

  constructor(private opportuniteService: OpportuniteService,
              private router:Router ,  public dialogRef: MatDialogRef<ReevaluerOpportuniteComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
    this.opportuniteService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });

    this.opportuniteService.getStateOpportunity()
      .subscribe((data) => {

        this.EtatOpportunite = data['hydra:member'];
        console.log(this.EtatOpportunite);

      },error => {
        console.log(false);
      });

    this.opportuniteService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }


  public reevaluationOpportunite() {
    this.opportuniteService.reevaluationOpportinuty(this.id , this.data).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
