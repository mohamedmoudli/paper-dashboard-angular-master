import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historique-objectif',
  templateUrl: './historique-objectif.component.html',
  styleUrls: ['./historique-objectif.component.css']
})
export class HistoriqueObjectifComponent implements OnInit {
  historique : any;
  public hidder = ["id" , "Description" , "Enjeux" ,"T1" , "T2" ,"T3" , "T4" , "T2020" , "T2021" , "Process lie" , "indicateur" , "indicateur performance", "Objective a attendre" ,"Etat intial" , "Num Action" , "Commentaire" , "date"];
  constructor(private opportuniteService: OpportuniteService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportuniteService.getHistoriqueOpportunite()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }
}
