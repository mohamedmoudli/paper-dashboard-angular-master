import { Component, OnInit } from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouterrisque',
  templateUrl: './ajouterrisque.component.html',
  styleUrls: ['./ajouterrisque.component.css']
})
export class AjouterrisqueComponent implements OnInit {
  categorierisque: any ;
  Strategique: any ;
  Process: any ;
  EtatRisque: any;
  constructor(private risqueService: RisqueService,
              private router: Router) { }

  ngOnInit(): void {
    this.risqueService.getCategoriesRisque()
      .subscribe((data) => {

        this.categorierisque = data['hydra:member'];
        console.log(this.categorierisque);

      },error => {
        console.log(false);
      });
    this.risqueService.getEtatRisque()
      .subscribe((data) => {

        this.EtatRisque = data['hydra:member'];
        console.log(this.EtatRisque);

      },error => {
        console.log(false);
      });

    this.risqueService.getStrategiqueRisque()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.risqueService.getProcessRisque()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  ajouterrisque(data){
    console.log(data);
    this.risqueService.saveRisque(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
      },error => {

        console.log(error);

        return error;
      }
    )
  }

}
