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
  catchartjs : any;
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

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public chartLabels = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public pieChartLabelsEtatRisque = [];
  public pieChartDataEtatRisque = [];
  public pieChartTypeEtatRisque = 'pie';
  public chartLabelsEtatRisque = [];

  public chartColorsEtatRisque : Array<any> = [
    {
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
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
      backgroundColor: ['#F7464A', '#00FF00', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  listStatesOpenClosed= [];


  constructor(private syntheseService: SyntheseService,
              private router: Router ,  private dialog: MatDialog) { }

  ngOnInit(): void {
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

        this.catchartjsCurrentStateByProcess = data;
        console.log(data);
        for (let element of this.catchartjsCurrentStateByProcess ) {
          this.pieChartLabelsCurrentStateByProcess.push(element.Type);
          this.chartColorsCurrentStateByProcess.push(element.Type);
          this.pieChartDataCurrentStateByProcess.push(element.nbre);

          console.log(this.pieChartDataCurrentStateByProcess);
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
    this.syntheseService.GetTimeLimitAdvencementbyProcess()
      .subscribe(
        (data)=>{
         this.advencementbytimelimit = data;
         console.log(this.advencementbytimelimit);
        },error => {
          console.log(false);
        }
      )
  }

}
