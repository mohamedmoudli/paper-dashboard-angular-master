import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {DelateHistoricalRiskComponent} from '../../Risk/delate-historical-risk/delate-historical-risk.component';
import {MatDialog} from '@angular/material/dialog';
import {DelateHistoricalInterestedPartyComponent} from '../delate-historical-interested-party/delate-historical-interested-party.component';

@Component({
  selector: 'app-historical-interested-party',
  templateUrl: './historical-interested-party.component.html',
  styleUrls: ['./historical-interested-party.component.css']
})
export class HistoricalInterestedPartyComponent implements OnInit {
  historical: any ;
  p:number = 1;
  public animal: string;
  public hidder = ["nomPI", "poids" , "date"];

  constructor(private interestedPartyService: InterestedPartyService,
              private router: Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.interestedPartyService.gethistoricalPI()
      .subscribe((data) => {

        console.log(data);
        this.historical = data['hydra:member'];
        console.log(this.historical);
      }, error => {
        console.log(false);
      });
    this.interestedPartyService.castinterestedParty.subscribe( interestedParty => this.historical = interestedParty);
  }

  public delateHistoricalInterestedParty(data): void {
    this.charingTheHistoricalInterestedParty();
    const dialogRef = this.dialog.open(DelateHistoricalInterestedPartyComponent, {
      width: "500px",
      height: "150px",
      data:data

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  charingTheHistoricalInterestedParty(){
    this.interestedPartyService.charingInterestedParty(this.historical);
  }

}
