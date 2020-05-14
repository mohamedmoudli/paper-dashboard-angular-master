import {Component, Inject, OnInit} from '@angular/core';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-historical-interested-party',
  templateUrl: './delate-historical-interested-party.component.html',
  styleUrls: ['./delate-historical-interested-party.component.css']
})
export class DelateHistoricalInterestedPartyComponent implements OnInit {

  Historicalinterestedparty: any;
  itemHistorical: any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateHistoricalInterestedPartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.Historicalinterestedparty = interestedParty);
    console.log(this.Historicalinterestedparty);
  }


  public delate() {
    this.interestedPartyService.deletehistorical(this.data.id).subscribe((data) => {
      const index: number = this.Historicalinterestedparty.indexOf(this.data);
      console.log(index);
      this.itemHistorical = this.Historicalinterestedparty.splice(index ,1);
      this.Historicalinterestedparty = this.Historicalinterestedparty.filter(user => user !== this.itemHistorical);
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
