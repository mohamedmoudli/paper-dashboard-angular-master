import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {Color} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {AjouterCategoriesPIComponent} from '../Create-categories-pi/ajouter-categories-pi.component';
import {MatDialog} from '@angular/material/dialog';
import {AjouterPIComponent} from '../Create-pi/ajouter-pi.component';

@Component({
  selector: 'app-partieinteresse',
  templateUrl: './partieinteresse.component.html',
  styleUrls: ['./partieinteresse.component.css']
})
export class PartieinteresseComponent implements OnInit {
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
    pouvoir: "",
    interet: "",
    influence: ""

  };


  constructor(private partieinteresse: PartieinteresseService,
              private router: Router ,  private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.partieinteresse.getNbreCategories()
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


    this.partieinteresse.getCategoriesPI()
      .subscribe((data) => {

      }, error => {
        console.log(false);
      });

    this.partieinteresse.getNomCategorie()
      .subscribe((data) => {


      }, error => {
        console.log(false);
      });


    this.partieinteresse.getCategoriesparPI()
      .subscribe((data) => {

        console.log(data);
        this.users = data;
        console.log(this.users);
      }, error => {
        console.log(false);
      });


    this.partieinteresse.getpartieinteresse()
      .subscribe((data) => {
        this.users1 = data['hydra:member'];
        console.log(this.users1)

      }, error => {
        console.log(false);
      });


  }


  affiche() {
    if (this.data.nom_champ == 'interet') {
      this.interet = this.data.interet;
      return true;
    } else {
      return false;
    }


  }

  affiche1() {
    if (this.data.nom_champ == 'pouvoir') {
      this.interet = this.data.interet;
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
    this.partieinteresse.getpartieinteressebyid(id)
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
    this.partieinteresse.getpoidsbyid(this.id, this.data)
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
    this.partieinteresse.getpipertinante(this.idseul)
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
      this.partieinteresse.savehistoriquePI(this.idseul)
        .subscribe((data) => {
            console.log(data);
            this.pipert = data;
          }, error => {

          }
        )
    }
  }

  public Createpartieinteresse(): void {

    const dialogRef = this.dialog.open(AjouterPIComponent, {
      width: "500px",
      height: "300px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
