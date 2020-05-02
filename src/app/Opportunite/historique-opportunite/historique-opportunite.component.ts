import { Component, OnInit } from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-historique-opportunite',
  templateUrl: './historique-opportunite.component.html',
  styleUrls: ['./historique-opportunite.component.css']
})
export class HistoriqueOpportuniteComponent implements OnInit {
  historique : any;
  public hidder = ["id" , "Etat " , "Commentaire" ,"num action" , "date"];
  constructor(private opportuniteService: OpportuniteService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportuniteService.gethistoricalOpportunite()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }

}
