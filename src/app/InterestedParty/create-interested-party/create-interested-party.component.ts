import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-create-interested-party',
  templateUrl: './create-interested-party.component.html',
  styleUrls: ['./create-interested-party.component.css']
})
export class CreateInterestedPartyComponent implements OnInit {
  public users = [];
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router) { }

  ngOnInit(): void {

    this.interestedPartyService.getCategoryInterestedParty()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });
  }


  CreateInterestedParty(data){
    console.log(data);
    this.interestedPartyService.SaveInterestedParty(data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true)
        return this.router.navigate(['partieinteresse'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }

}
