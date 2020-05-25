import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color} from 'ng2-charts';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HelpPiRelevantComponent} from '../help-pi-relevant/help-pi-relevant.component';
import {DefinitionPIRelevantComponent} from '../definition-pirelevant/definition-pirelevant.component';
import {DefinitionInterestedPartyComponent} from '../definition-interested-party/definition-interested-party.component';
import {CreateInterestedPartyComponent} from '../create-interested-party/create-interested-party.component';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {CreateCategoryInterestedPartyComponent} from '../create-category-interested-party/create-category-interested-party.component';
import {SaveHistoricalInterestedPartyComponent} from '../save-historical-interested-party/save-historical-interested-party.component';

@Component({
  selector: 'app-interested-party',
  templateUrl: './interested-party.component.html',
  styleUrls: ['./interested-party.component.css']
})
export class InterestedPartyComponent implements OnInit {
  CategoryByInterestedParty: any;
  InteresetedParty: any;
  interestedpartyRevelant : any;
  public interestedparty: any;

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ticks: {min: 0, max: 5,}}],
      yAxes: [{ticks: {min: 0, max: 5,}}]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public interet: string;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        {x: localStorage.getItem('influence') , y: localStorage.getItem('power') , r: 8},
        {x: 2 , y: 3 , r: 8},

      ],
      label: this.interestedparty,
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
      ]
    }
  ];


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public data1 = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.data1, label: 'NOMBRE DE PI PAR CATEGORIES'},

  ];


  public exigence;
  public idseul;

  public id;
  public influence;
  public poui: number;
  public nom_champ: any;
  public nom_champ1: any;

  public NomPI;
  public test: any = [];
  public test1 = [];
  namecategories: any;
  public users: Object = [];
  public Nbre: Object = [];
  public users1: Object = [];
  public users2: Object = [];
  public respoid: Object = [];
  public pipert: any ;
  public users5: [];
  public catchartjs: any;
  users3: any;
  nomcat: any;
  public listeCat = ["categorie", "nbre"];
  public pertinantePouvoir = ["id", "pi", "influence", "pouvoir", "poids"];
  public pertinanteInteret = ["id", "pi", "influence", "interet", "poids"];
  public hidder = ["id", "pi", "poids"];

  public data = {
    nom_champ: "",
    Power: "",
    Interest: "",
    influence: ""
  };

  constructor(private interestedPartyService: InterestedPartyService,
              private router: Router ,  private dialog: MatDialog) {
  }

  ngOnInit(): void {

    if (!!localStorage.getItem('seul')) {
      const seul = localStorage.getItem('seul');
      this.interestedPartyService.getInterestedPartyRevelant(seul)
        .subscribe((data) => {
            console.log(data);
            this.pipert = data;
          }, error => {

          }
        )
    }


    this.interestedPartyService.getNbreCategory()
      .subscribe((data) => {
        this.catchartjs = data;
        console.log(data);
        for (let element of this.catchartjs) {
          this.barChartLabels.push(element.Nom);
          this.data1.push(element.nbre);

          console.log(this.data1);
          console.log(data);
        }

        this.Nbre = data;
      }, error => {
        console.log(false);
      });


    this.interestedPartyService.getCategoryInterestedParty()
      .subscribe((data) => {

      }, error => {
        console.log(false);
      });




    this.interestedPartyService.getCategoryByInterestedParty()
      .subscribe((data) => {

        console.log(data);
        this.CategoryByInterestedParty = data;
        console.log(this.CategoryByInterestedParty);
      }, error => {
        console.log(false);
      });


    this.interestedPartyService.getInteresetedParty()
      .subscribe((data) => {
        this.InteresetedParty = data['hydra:member'];
        console.log(this.InteresetedParty)

      }, error => {
        console.log(false);
      });


  }


  displayInterest() {
    if (this.data.nom_champ == 'interet') {
      this.interet = this.data.Interest;
      return true;
    } else {
      return false;
    }


  }

  displaypower() {
    if (this.data.nom_champ == 'pouvoir') {
      this.interet = this.data.Interest;
      return true;
    } else {
      return false;
    }

  }

  displayExigency() {
    return this.exigence == 'oui';

  }




  getWeight() {

    this.interestedPartyService.getLoadsbyid(this.id, this.data)
      .subscribe(
        (data) => {
          console.log(data);
          this.respoid = data;
          localStorage.setItem('power' , this.data.Power);
          localStorage.setItem('influence' , this.data.influence);
          localStorage.setItem('Interest' , this.data.Interest);
          return this.router.navigate(['partieinteresse']);
        }, error => {
          console.log(error);

        }
      )
  }


  InterestedPartyRevelant() {
    localStorage.setItem('seul' , this.idseul);
    this.interestedPartyService.getInterestedPartyRevelant(this.idseul)
      .subscribe((data) => {
          console.log(data);
          this.interestedpartyRevelant = data;
        }, error => {

        }
      )
  }



  savehistoricalInterestedParty(): void {
   this.charingTheCategoryInterestedParty();
    const dialogRef = this.dialog.open(SaveHistoricalInterestedPartyComponent, {
      width: "400px",
      height: "200px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheCategoryInterestedParty(){
    this.interestedPartyService.charingInterestedParty(this.pipert);
  }
  definitionInterestedParty(){
    const dialogRef = this.dialog.open(DefinitionInterestedPartyComponent, {
      width: "500px",
      height: "260px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  definitionInterestedPartyRevelant(){
    const dialogRef = this.dialog.open(DefinitionPIRelevantComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  helpInterestedPartyRevelant(){
    const dialogRef = this.dialog.open(HelpPiRelevantComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
}
