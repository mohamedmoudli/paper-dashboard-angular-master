import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-historical-interested-party',
  templateUrl: './historical-interested-party.component.html',
  styleUrls: ['./historical-interested-party.component.css']
})
export class HistoricalInterestedPartyComponent implements OnInit {
  users: any ;
  public hidder = ["nomPI", "poids" , "date"];

  constructor(private interestedPartyService: InterestedPartyService,
              private router: Router) { }

  ngOnInit(): void {
    this.interestedPartyService.gethistoricalPI()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }

  public delate(id) {
    console.log(id);
    this.interestedPartyService.deletehistorical(id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();

    }), (error) => {

      console.log("Error", error);
    };

  }
}
