import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DelateExigencyInterestedPartyComponent} from '../delate-exigency-interested-party/delate-exigency-interested-party.component';
import {CreateExigencyInterestedPartyComponent} from '../create-exigency-interested-party/create-exigency-interested-party.component';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-exigency-interested-party',
  templateUrl: './exigency-interested-party.component.html',
  styleUrls: ['./exigency-interested-party.component.css']
})
export class ExigencyInterestedPartyComponent implements OnInit {

  public exigency: any;

  public hidder = ["id" , "nom categories"];
  public test = false;
  public data = {
    nomcat: ""


  };

  public listeExigence = [ "id" , "etat de confirmité" , "commentaire" , "N action" ];

  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router , private dialog: MatDialog) { }

  ngOnInit(): void {
    this.interestedPartyService.getExigencyPI()
      .subscribe((data) => {

        this.exigency = data;
        console.log(this.exigency);
      },error => {
        console.log(false);
      });
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty => this.exigency = interestedParty);
  }


  public CreateExigency(): void {
    this.charingTheExigency();
    const dialogRef = this.dialog.open(CreateExigencyInterestedPartyComponent, {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  public delateExigency(data): void {
    this.charingTheExigency();
    const dialogRef = this.dialog.open(DelateExigencyInterestedPartyComponent, {
      width: "500px",
      height: "150px",
      data:data ,

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");

    });
  }
  charingTheExigency(){
    this.interestedPartyService.charingInterestedParty(this.exigency);
  }
}
