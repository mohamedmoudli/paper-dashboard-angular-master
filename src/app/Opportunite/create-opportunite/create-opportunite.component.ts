import { Component, OnInit } from '@angular/core';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-opportunite',
  templateUrl: './create-opportunite.component.html',
  styleUrls: ['./create-opportunite.component.css']
})
export class CreateOpportuniteComponent implements OnInit {
  categoryOpportunity: any ;
  Strategique: any ;
  Process: any ;
  EtatOpportunite: any;
  constructor(private opportuniteService: OpportuniteService,
              private router: Router) { }

  ngOnInit(): void {
    this.opportuniteService.getCategoryOpportunity()
      .subscribe((data) => {

        this.categoryOpportunity = data['hydra:member'];
        console.log(this.categoryOpportunity);

      },error => {
        console.log(false);
      });

    this.opportuniteService.getStateOpportunity()
      .subscribe((data) => {

        this.EtatOpportunite = data['hydra:member'];
        console.log(this.EtatOpportunite);

      },error => {
        console.log(false);
      });

    this.opportuniteService.getStrategicOpportunity()
      .subscribe((data) => {

        this.Strategique = data['hydra:member'];
        console.log(this.Strategique);

      },error => {
        console.log(false);
      });
    this.opportuniteService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  saveOpportunite(data){
    console.log(data);
    this.opportuniteService.saveOpportunity(data).subscribe(
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
