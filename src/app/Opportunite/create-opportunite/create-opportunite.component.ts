import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-opportunite',
  templateUrl: './create-opportunite.component.html',
  styleUrls: ['./create-opportunite.component.css']
})
export class CreateOpportuniteComponent implements OnInit {
  categorieOpportunite: any ;
  Strategique: any ;
  Process: any ;
  constructor(private opportuniteService: OpportuniteService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportuniteService.getCategoriesOpportunite()
      .subscribe((data) => {

        this.categorieOpportunite = data['hydra:member'];
        console.log(this.categorieOpportunite);

      },error => {
        console.log(false);
      });

    this.opportuniteService.getStrategiqueOpportunite()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.opportuniteService.getProcessRisque()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  saveOpportunite(data){
    console.log(data);
    this.opportuniteService.saveOpportunite(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        return this.router.navigate(['Opportunite'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }

}
