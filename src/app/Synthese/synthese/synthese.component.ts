import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SyntheseService} from '../../Services/Synthese/synthese.service';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.css']
})
export class SyntheseComponent implements OnInit {
  allObjective: boolean = false;
  allbyObjective: boolean = false ;
  p:number = 1;
  public hidder = ["id" , "Description" , "Enjeux" ,"T1" , "T2" ,"T3" , "T4" , "T2020" , "T2021" ,
    "Process lie" , "indicateur" , "indicateur performance", "Objective a attendre" ,"Etat intial" ,
    "Num Action" , "Advencement" , "Commentaire" , "date"];
  catchartjs : any;
  Stake : any;
  Description : any;
  Objective : any;
  Objectivebyid : any;
  DescriptionHistorical : any;
  catchartjsCategorie : any;
  catchartjsCategorieOpportunite : any;
  catchartjsCurrentState : any;
  catchartjsCurrentStateByProcess : any;
  advencementbytimelimit : any;
  timelimit : any;
  catchartjsAdvencementByProcess : any;
  catchartjsStateEfficacity : any;
  catchartjsEtatOpportunite : any;
  public Nbre: Object = [];
  public Process: Object = [];
  public NbreCategorie : Object = [];



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public data1 = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: this.data1, label: 'NOMBRE DE PI PAR CATEGORIES'},

  ];



  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public chartLabels = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#86ccdc', '#EE8900', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#86ccdc', '#EE8900', '#FDB45C', '#949FB1', '#4D5360'],
      borderWidth: 2,
    }
  ];

  public pieChartLabelsEtatRisque = [];
  public pieChartDataEtatRisque = [];
  public pieChartTypeEtatRisque = 'pie';
  public chartLabelsEtatRisque = [];

  public chartColorsEtatRisque : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#4D5360', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];



  public pieChartLabelsEtatOpportunite = [];
  public pieChartDataEtatOpportunite = [];
  public pieChartTypeEtatOpportunite = 'pie';
  public chartLabelsEtatOpportunite = [];

  public chartColorsEtatOpportunite : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#4D5360', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];


  public pieChartLabelsCategorieOpportunite = [];
  public pieChartDataCategorieOpportunite = [];
  public pieChartTypeCategorieOpportunite = 'pie';
  public chartLabelsCategorieOpportunite = [];

  public chartColorsCategorieOpportunite : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#949FB1', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public pieChartLabelsCurrentState = [];
  public pieChartDataCurrentState = [];
  public pieChartTypeCurrentState = 'pie';
  public chartLabelsCurrentState = [];

  public chartColorsCurrentState : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#4D5360', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public pieChartLabelsStateEfficacity = [];
  public pieChartDataStateEfficacity = [];
  public pieChartTypeStateEfficacity = 'pie';
  public chartLabelsStateEfficacity = [];

  public chartColorsStateEfficacity : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#4D5360', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public pieChartLabelsCurrentStateByProcess = [];
  public pieChartDataCurrentStateByProcess = [];
  public pieChartTypeCurrentStateByProcess = 'pie';
  public chartLabelsCurrentStateByProcess = [];

  public chartColorsCurrentStateByProcess : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#4D5360', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public pieChartLabelsAdvencementByProcess = [];
  public pieChartDataAdvencementByProcess = [];
  public pieChartTypeAdvencementByProcess = 'bar';
  public chartLabelsAdvencementByProcess = [];

  public chartColorsAdvencementByProcess : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#949FB1', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  listStatesOpenClosed= [];


  constructor(private syntheseService: SyntheseService,
              private router: Router ,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.syntheseService.getStake()
      .subscribe((data) => {

        console.log(data);
        this.Stake = data['hydra:member'];
        console.log(this.Stake);
      }, error => {
        console.log(false);
      });

    this.syntheseService.GetStateRiskNumber()
      .subscribe((data) => {

        this.catchartjs = data;
        console.log(data);
        for (let element of this.catchartjs) {
          this.pieChartLabelsEtatRisque.push(element.Nom);
          this.chartLabelsEtatRisque.push(element.Nom);
          this.pieChartDataEtatRisque.push(element.nbre);

          console.log(this.pieChartDataEtatRisque);
          console.log(data);
        }

        this.Nbre = data;
      }, error => {
        console.log(false);
      });

    this.syntheseService.GetCategoryRiskNumber()
      .subscribe((data) => {

        this.catchartjsCategorie = data;
        console.log(data);
        for (let element of this.catchartjsCategorie ) {
          this.pieChartLabels.push(element.Nom);
          this.chartLabels.push(element.Nom);
          this.pieChartData.push(element.nbre);

          console.log(this.pieChartData);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });


    this.syntheseService.GetStateOpportunityNumber()
      .subscribe((data) => {

        this.catchartjsEtatOpportunite = data;
        console.log(data);
        for (let element of this.catchartjsEtatOpportunite ) {
          this.pieChartLabelsEtatOpportunite.push(element.Nom);
          this.chartLabelsEtatOpportunite.push(element.Nom);
          this.pieChartDataEtatOpportunite.push(element.nbre);

          console.log(this.pieChartDataEtatOpportunite);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });

    this.syntheseService.GetCategoryOpportunityNumber()
      .subscribe((data) => {

        this.catchartjsCategorieOpportunite = data;
        console.log(data);
        for (let element of this.catchartjsCategorieOpportunite ) {
          this.pieChartLabelsCategorieOpportunite.push(element.Nom);
          this.chartLabelsCategorieOpportunite.push(element.Nom);
          this.pieChartDataCategorieOpportunite.push(element.nbre);

          console.log(this.pieChartDataCategorieOpportunite);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });

    this.syntheseService.GetCurrentStateActionPlanNumber()
      .subscribe((data) => {

        this.catchartjsCurrentState = data;
        console.log(data);
        for (let element of this.catchartjsCurrentState ) {
          this.pieChartLabelsCurrentState.push(element.Type);
          this.chartLabelsCurrentState.push(element.Type);
          this.pieChartDataCurrentState.push(element.nbre);

          console.log(this.pieChartDataCurrentState);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });
    this.syntheseService.GetStateEfficacityActionPlanNumber()
      .subscribe((data) => {

        this.catchartjsStateEfficacity = data;
        console.log(data);
        for (let element of this.catchartjsStateEfficacity ) {
          this.pieChartLabelsStateEfficacity.push(element.Type);
          this.chartLabelsStateEfficacity.push(element.Type);
          this.pieChartDataStateEfficacity.push(element.nbre);

          console.log(this.pieChartDataCategorieOpportunite);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });

    this.syntheseService.GetCurrentStateActionPlanbyProcessNumber()
      .subscribe((data) => {
        var catchartjsCurrentStateByProcess = JSON.stringify(Object.assign({}, data));
        this.catchartjsCurrentStateByProcess = data;
        console.log(data);
        for (let element of this.catchartjsCurrentStateByProcess ) {
          this.pieChartLabelsCurrentStateByProcess.push(JSON.parse(element));
          this.chartColorsCurrentStateByProcess.push(element.Type);
          this.pieChartDataCurrentStateByProcess.push(element.nbre);

          console.log(this.pieChartLabelsCurrentStateByProcess);
          console.log(data);
        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });


    this.syntheseService.GetAdvencementActionPlanbyProcessNumber()
      .subscribe((data) => {

        this.catchartjsAdvencementByProcess = data;
        console.log(data);
        for (let element of this.catchartjsAdvencementByProcess ) {
          this.pieChartLabelsAdvencementByProcess.push(element.process);
          this.chartLabelsAdvencementByProcess.push(element.process);
          this.pieChartDataAdvencementByProcess.push(element.avencement);

          console.log(this.pieChartLabelsAdvencementByProcess);

        }

        this.NbreCategorie = data;
      }, error => {
        console.log('gggggg');
      });
    this.syntheseService.GetDelaibyprocess()
      .subscribe(
        (data)=>{
         this.advencementbytimelimit = data;
         console.log(this.advencementbytimelimit);
        },error => {
          console.log(false);
        }
      )
  }
 public DisplayObjective(){
   this.syntheseService.gethistoricalObjectivebyStake(this.Description)
     .subscribe((data) => {

       console.log(data);
       this.Objective = data;
       console.log(this.Objective);
     }, error => {
       console.log(false);
     });

 }

  public DisplayObjectivebyDescription(){
    this.syntheseService.gethistoricalObjectivebyStakebyDescription(this.Description , this.DescriptionHistorical)
      .subscribe((data) => {

        console.log(data);

        this.Objectivebyid = data;
        console.log(this.Objectivebyid);
        for (let element of this.Objectivebyid) {
          this.barChartLabels.push(element.Date );
          this.data1.push(element.Advancement);

          console.log(this.data1);
          console.log(data);
        }

        this.Nbre = data;
      }, error => {
        console.log(false);
      });

  }
public DisplayallObjective(){
  this.allObjective !== this.allObjective;
  console.log(this.allObjective)
}
  public DisplayallbyObjective(){
    this.allbyObjective !== this.allbyObjective;
    console.log(this.allbyObjective)
  }
}
