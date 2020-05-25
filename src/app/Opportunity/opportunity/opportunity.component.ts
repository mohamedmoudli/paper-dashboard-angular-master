import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StakeRiskComponent} from '../../Risk/stake-risk/stake-risk.component';
import {PIRelevantComponent} from '../../Risk/pirelevant/pirelevant.component';
import {HelpOpportunityComponent} from '../help-opportunity/help-opportunity.component';
import {DefinitionOpportunityComponent} from '../definition-opportunity/definition-opportunity.component';
import {ReevaluateOpportunityComponent} from '../reevaluate-opportunity/reevaluate-opportunity.component';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
  opportunity : any;
  Stake : any;

  public hidder = ["id", "CategorieRisque" , "description" , "court term" , "moyen term" , "long term" ,
    "date d'indentification" , "Coherence" , "Allignement" , "Presence" , "Competences" , "Continute" , "Gain" , "Efforts" ,
    "Aventages" , "Poids" , "Decision" , "Stategique" , "process lié" , "N action" , "etat risque" ,
    "Efforts" ,"Aventages" ,"Poids" ,"Decision" , "Stategique" , "process lié" , "N action" , "etat risque" , "commentaire"];

  constructor(private opportunityService: OpportunityService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.opportunityService.getOpportunity()
      .subscribe((data) => {

        console.log(data);
        this.opportunity = data;
        console.log(this.opportunity);
      }, error => {
        console.log(false);
      });
    this.opportunityService.getStake()
      .subscribe((data) => {

        console.log(data);
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });

  }

  public DisplayStake(): void {

    const dialogRef = this.dialog.open(StakeRiskComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }

  public DisplayPIpertinante(): void {

    const dialogRef = this.dialog.open(PIRelevantComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  saveHistoricalOpportunity(){
    this.opportunityService.savehistoricalOpportunite()
      .subscribe((data) => {

        console.log(data);

      }, error => {
        console.log(false);
      });
  }
  reevaluateOpportunity(id){
    const dialogRef = this.dialog.open(ReevaluateOpportunityComponent, {
      width: "500px",
      height: "300px",
      data:id
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  definitionOpportunity(){
    const dialogRef = this.dialog.open(DefinitionOpportunityComponent, {
      width: "300px",
      height: "300px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  helpOpportunity(){
    const dialogRef = this.dialog.open(HelpOpportunityComponent, {
      width: "300px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
}
