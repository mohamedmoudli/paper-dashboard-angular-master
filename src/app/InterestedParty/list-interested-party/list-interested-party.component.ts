import { Component, OnInit } from '@angular/core';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {Router} from '@angular/router';
import {CreateInterestedPartyComponent} from '../create-interested-party/create-interested-party.component';
import {MatDialog} from '@angular/material/dialog';
import {DelateInterestedPartyComponent} from '../delate-interested-party/delate-interested-party.component';

@Component({
  selector: 'app-list-interested-party',
  templateUrl: './list-interested-party.component.html',
  styleUrls: ['./list-interested-party.component.css']
})
export class ListInterestedPartyComponent implements OnInit {
  interestedParty: any;
  animal: any;
  public hidder = ["id", "pi" , "influence", "interet" ,  "pouvoir", "poids"];
  constructor(private interestedPartyService: InterestedPartyService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.interestedPartyService.getInteresetedParty()
      .subscribe((data) => {
        this.interestedParty = data['hydra:member'];
        console.log(this.interestedParty)

      }, error => {
        console.log(false);
      });
  }
  charingTheInterestedParty(){
  this.interestedPartyService.charingInterestedParty(this.interestedParty);
}

  public CreateInterestedParty(): void {
    this.charingTheInterestedParty();
    const dialogRef = this.dialog.open(CreateInterestedPartyComponent, {
      width: "500px",
      height: "370px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  public delateInterestedParty(data): void {
    this.charingTheInterestedParty();
    const dialogRef = this.dialog.open(DelateInterestedPartyComponent, {
      width: "500px",
      height: "300px",
      data:data ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

}
