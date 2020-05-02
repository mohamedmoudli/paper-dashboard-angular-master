import { Component, OnInit } from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historiquerisque',
  templateUrl: './historiquerisque.component.html',
  styleUrls: ['./historiquerisque.component.css']
})
export class HistoriquerisqueComponent implements OnInit {
 historique : any;
  public hidder = ["id" , "Criticite", "decision" , "strategique" , "processus" , "Etat risque" , "Commentaire" ,"num action" , "date"];
  constructor(private risqueService: RisqueService,
              private router: Router) { }

  ngOnInit(): void {
    this.risqueService.gethistoricalRisk()
      .subscribe((data) => {

        console.log(data);
        this.historique = data;
        console.log(this.historique);
      }, error => {
        console.log(false);
      });
  }

}
