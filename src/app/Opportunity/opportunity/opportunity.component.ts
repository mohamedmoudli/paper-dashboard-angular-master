import { Component, OnInit } from '@angular/core';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StakeRiskComponent} from '../../Risk/stake-risk/stake-risk.component';
import {PIRelevantComponent} from '../../Risk/pirelevant/pirelevant.component';
import {HelpOpportunityComponent} from '../help-opportunity/help-opportunity.component';
import {DefinitionOpportunityComponent} from '../definition-opportunity/definition-opportunity.component';
import {ReevaluateOpportunityComponent} from '../reevaluate-opportunity/reevaluate-opportunity.component';
import {SaveHistoricalOpportunityComponent} from '../save-historical-opportunity/save-historical-opportunity.component';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
  opportunity : any;
  Stake : any;

  public hidder = ["id", "catégorie" , "description" , "court terme" , "moyen terme" , "long terme" ,
    "date d'indentification" , "cohérence" , "allignement" , "présence" , "compétences" , "continuté" , "gain" , "efforts" ,
    "avantages" , "poids" , "décision" , "statégie" , "processus lié" , "N action" , "état" ,
    "efforts" ,"avantages" ,"poids" ,"décision" , "Statégie" , "processus lié" , "N action" , "état" , "commentaire"];

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
    const dialogRef = this.dialog.open(SaveHistoricalOpportunityComponent, {
      width: "400px",
      height: "200px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  reevaluateOpportunity(id){
    this.opportunityService.charingOpportunity(id);
    return this.router.navigate(['reevaluationopportunite'])
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
  public CreateRole() {
    const role = localStorage.getItem('role');
    if ( role == 'ROLE_SUPERADMIN') {
      return true;
    }
  }
}
