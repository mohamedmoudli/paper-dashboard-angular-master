import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-interested-party',
  templateUrl: './create-interested-party.component.html',
  styleUrls: ['./create-interested-party.component.css']
})
export class CreateInterestedPartyComponent implements OnInit {
  public CategoryInterestedParty = [];
  interestedparty: any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<CreateInterestedPartyComponent>) { }

  ngOnInit(): void {

    this.interestedPartyService.getCategoryInterestedParty()
      .subscribe((data) => {

        this.CategoryInterestedParty = data['hydra:member'];
        console.log(this.CategoryInterestedParty);

      },error => {
        console.log(false);
      });
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.interestedparty = interestedParty);
    console.log(this.interestedparty);
  }


  CreateInterestedParty(data){
    this.charingTheInterestedParty();
    this.interestedPartyService.SaveInterestedParty(data).subscribe(
      resp=>{
        console.log(this.interestedparty);
        this.interestedparty = this.interestedparty.push(data);
        console.log(this.interestedparty);
        this.onNoClick();
      },error => {

        console.log(error);

        return error;
      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  charingTheInterestedParty(){
    this.interestedPartyService.charingInterestedParty(this.interestedparty);

  }
}
