import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historique-pipertinante',
  templateUrl: './historique-pipertinante.component.html',
  styleUrls: ['./historique-pipertinante.component.css']
})
export class HistoriquePIpertinanteComponent implements OnInit {
  users: any ;
  public hidder = ["nomPI", "poids" , "date"];

  constructor(private partieinteresse: PartieinteresseService,
              private router: Router) { }

  ngOnInit(): void {
    this.partieinteresse.gethistoriquePI()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }

  public supp(id) {
    console.log(id);
    this.partieinteresse.deleteHistorique(id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();

    }), (error) => {

      console.log("Error", error);
    };

  }
  }


