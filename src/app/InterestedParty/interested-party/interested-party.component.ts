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

@Component({
  selector: 'app-interested-party',
  templateUrl: './interested-party.component.html',
  styleUrls: ['./interested-party.component.css']
})
export class InterestedPartyComponent implements OnInit {
  public animal: string;

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
        {x: 8 , y: 3 , r: 8},
        {x: 2 , y: 3 , r: 8},

      ],
      label: 'Series A',
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
      this.interestedPartyService.getpipertinante(seul)
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

    this.interestedPartyService.getNameCategory()
      .subscribe((data) => {


      }, error => {
        console.log(false);
      });


    this.interestedPartyService.getCategoryByInterestedParty()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });


    this.interestedPartyService.getInteresetedParty()
      .subscribe((data) => {
        this.users1 = data['hydra:member'];
        console.log(this.users1)

      }, error => {
        console.log(false);
      });


  }


  affiche() {
    if (this.data.nom_champ == 'interet') {
      this.interet = this.data.Interest;
      return true;
    } else {
      return false;
    }


  }

  affiche1() {
    if (this.data.nom_champ == 'pouvoir') {
      this.interet = this.data.Interest;
      return true;
    } else {
      return false;
    }

  }

  affexigence() {
    return this.exigence == 'oui';

  }


  public search() {

  }


  aff(id) {
    this.interestedPartyService.getInterestedPartybyid(id)
      .subscribe((data) => {
        this.users2 = data;
        console.log(this.users2);
      }, error => {

      })
  }

  test123() {
    alert(this.nom_champ)
  }


  setpoid() {
    console.log(this.data);
    console.log(this.id);
    this.interestedPartyService.getLoadsbyid(this.id, this.data)
      .subscribe(
        (data) => {
          console.log(data);
          this.respoid = data;
          return this.router.navigate(['partieinteresse']);
        }, error => {
          console.log(error);

        }
      )
  }


  pipertinante() {
    localStorage.setItem('seul' , this.idseul);
    this.interestedPartyService.getpipertinante(this.idseul)
      .subscribe((data) => {
          console.log(data);
          this.pipert = data;
        }, error => {

        }
      )
  }

  savehistoriquepi() {
    for (let element of this.pipert) {
      console.log(element);
      this.interestedPartyService.savehistoricalPI(this.idseul)
        .subscribe((data) => {
            console.log(data);
            this.pipert = data;
          }, error => {

          }
        )
    }
  }


  definitionpartieinteresse(){
    const dialogRef = this.dialog.open(DefinitionInterestedPartyComponent, {
      width: "500px",
      height: "260px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  definitionpiPertinante(){
    const dialogRef = this.dialog.open(DefinitionPIRelevantComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  helppiPertinante(){
    const dialogRef = this.dialog.open(HelpPiRelevantComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
