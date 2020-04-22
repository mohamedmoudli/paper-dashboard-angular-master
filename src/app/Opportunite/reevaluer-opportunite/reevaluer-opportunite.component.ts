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
  public data = {
    EffortReevaluation: '',
    AventageReevaluation: '',
    idstrategiqueReevaluation: '',
    idprocessReevaluation: '',
    EtatOpportuniteReevaluation: ''
  };

  constructor(private opportuniteService: OpportuniteService,
              private router:Router ,  public dialogRef: MatDialogRef<ReevaluerOpportuniteComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
    this.opportuniteService.getStrategiqueOpportunite()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.opportuniteService.getProcessRisque()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }


  public reevaluationOpportunite() {
    this.opportuniteService.reevaluationOpportinute(this.id , this.data).subscribe((data) => {
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
